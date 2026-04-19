import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';
import dns from 'dns/promises';

// ─── Supabase (server-only, service role key) ────────────────────────────────
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// ─── Constants ───────────────────────────────────────────────────────────────
const CSRF_SECRET       = process.env.CSRF_SECRET;
const RECAPTCHA_SECRET  = process.env.RECAPTCHA_SECRET_KEY;
const IP_SALT           = process.env.IP_SALT || 'blek-salt';
const MAX_ATTEMPTS      = 3;   // per hour per IP
const CSRF_TTL_MS       = 15 * 60 * 1000; // 15 minutes
const EMAIL_REGEX       = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{1,64}@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;

// ─── Security headers ────────────────────────────────────────────────────────
function setSecurityHeaders(res, corsOrigin) {
  if (corsOrigin) {
    res.setHeader('Access-Control-Allow-Origin', corsOrigin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Content-Security-Policy', "default-src 'none'");
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  res.setHeader('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');
}

function getAllowedCorsOrigin(reqOrigin) {
  const allowed = (process.env.ALLOWED_ORIGIN || '').split(',').map(o => o.trim());
  if (allowed.includes(reqOrigin)) return reqOrigin;
  if (reqOrigin && /^http:\/\/localhost:\d+$/.test(reqOrigin)) return reqOrigin; // dev
  return null;
}

// ─── CSRF ────────────────────────────────────────────────────────────────────
function validateCSRF(token) {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [timestamp, hmac] = parts;

  const ts = parseInt(timestamp, 10);
  if (isNaN(ts)) return false;

  const age = Date.now() - ts;
  if (age < 0 || age > CSRF_TTL_MS) return false;

  const expected = crypto
    .createHmac('sha256', CSRF_SECRET)
    .update(timestamp)
    .digest('hex');

  try {
    return crypto.timingSafeEqual(
      Buffer.from(hmac.padEnd(64, '0'), 'hex'),
      Buffer.from(expected.padEnd(64, '0'), 'hex')
    );
  } catch {
    return false;
  }
}

// ─── Email validation ────────────────────────────────────────────────────────
function sanitizeEmail(raw) {
  return String(raw).toLowerCase().trim().slice(0, 254).replace(/[<>'";&]/g, '');
}

async function checkMXRecord(domain) {
  try {
    const records = await dns.resolveMx(domain);
    return Array.isArray(records) && records.length > 0;
  } catch {
    return false;
  }
}

// ─── reCAPTCHA v3 ────────────────────────────────────────────────────────────
async function verifyRecaptcha(token) {
  if (!RECAPTCHA_SECRET) return true; // Skip if not configured
  try {
    const body = new URLSearchParams({
      secret: RECAPTCHA_SECRET,
      response: token,
    });
    const r = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });
    const data = await r.json();
    return data.success === true && (data.score ?? 1) >= 0.5;
  } catch {
    return false;
  }
}

// ─── Rate limiting (Supabase) ────────────────────────────────────────────────
function hashIP(ip) {
  return crypto.createHmac('sha256', IP_SALT).update(ip).digest('hex');
}

async function checkRateLimit(ipHash) {
  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count, error } = await supabase
    .from('subscription_attempts')
    .select('*', { count: 'exact', head: true })
    .eq('ip_hash', ipHash)
    .gte('created_at', since);

  if (error) return true; // Fail open — don't block on DB error
  return (count ?? 0) < MAX_ATTEMPTS;
}

async function recordAttempt(ipHash) {
  await supabase.from('subscription_attempts').insert([{ ip_hash: ipHash }]);
}

// ─── Main handler ─────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  const corsOrigin = getAllowedCorsOrigin(req.headers.origin);
  setSecurityHeaders(res, corsOrigin);

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const body = req.body || {};
    const { email, csrf, token: captchaToken, _hp } = body;

    // 1. Honeypot — bots fill hidden fields, humans don't
    if (_hp) {
      console.log('[subscribe] Honeypot triggered');
      return res.status(200).json({ success: true }); // Fake success
    }

    // 2. CSRF validation
    if (!validateCSRF(csrf)) {
      return res.status(403).json({ error: 'Solicitud inválida' });
    }

    // 3. Rate limiting
    const rawIP =
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.socket?.remoteAddress ||
      'unknown';
    const ipHash = hashIP(rawIP);

    const allowed = await checkRateLimit(ipHash);
    if (!allowed) {
      return res.status(429).json({ error: 'Demasiados intentos. Espera un poco.' });
    }
    await recordAttempt(ipHash);

    // 4. Input validation & sanitization
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Email requerido' });
    }
    const clean = sanitizeEmail(email);
    if (!EMAIL_REGEX.test(clean)) {
      return res.status(400).json({ error: 'Formato de email inválido' });
    }

    // 5. MX record check (verify domain can receive mail)
    const domain = clean.split('@')[1];
    const hasMX = await checkMXRecord(domain);
    if (!hasMX) {
      return res.status(400).json({ error: 'El dominio del email no existe' });
    }

    // 6. reCAPTCHA v3
    if (captchaToken) {
      const captchaOk = await verifyRecaptcha(captchaToken);
      if (!captchaOk) {
        return res.status(400).json({ error: 'Verificación de seguridad fallida' });
      }
    }

    // 7. Store in Supabase (server-side only, never exposed to frontend)
    const { error: dbError } = await supabase
      .from('email_signups')
      .insert([{ email: clean, source: 'landing_page' }]);

    if (dbError) {
      if (dbError.code === '23505') {
        // Duplicate — return success to avoid email enumeration
        return res.status(200).json({ success: true });
      }
      // Audit log: domain only, NEVER full email
      console.error(`[subscribe] DB error for domain @${domain}: ${dbError.code}`);
      return res.status(500).json({ error: 'Error interno. Inténtalo de nuevo.' });
    }

    // Audit log (domain only)
    console.log(`[subscribe] ✓ New signup from domain: @${domain}`);

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('[subscribe] Unexpected error:', err.message);
    return res.status(500).json({ error: 'Error interno' });
  }
}
