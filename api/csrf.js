import crypto from 'crypto';

function setSecurityHeaders(res) {
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
}

function getCorsOrigin(reqOrigin) {
  const allowed = process.env.ALLOWED_ORIGIN || '';
  const origins = allowed.split(',').map(o => o.trim());
  if (origins.includes(reqOrigin)) return reqOrigin;
  // Allow localhost in dev
  if (reqOrigin && reqOrigin.match(/^http:\/\/localhost:\d+$/)) return reqOrigin;
  return null;
}

export default function handler(req, res) {
  setSecurityHeaders(res);

  const corsOrigin = getCorsOrigin(req.headers.origin);
  if (corsOrigin) {
    res.setHeader('Access-Control-Allow-Origin', corsOrigin);
    res.setHeader('Vary', 'Origin');
  }

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).end();

  const secret = process.env.CSRF_SECRET;
  if (!secret) return res.status(500).json({ error: 'Server misconfigured' });

  const timestamp = Date.now().toString();
  const hmac = crypto
    .createHmac('sha256', secret)
    .update(timestamp)
    .digest('hex');

  res.status(200).json({ csrf: `${timestamp}.${hmac}` });
}
