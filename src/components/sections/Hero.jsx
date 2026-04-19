import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { BorderBeam } from '../ui/BorderBeam';
import { AvatarGroup, Avatar } from '../ui/AvatarGroup';
import { PhoneMockup } from '../ui/PhoneMockup';
import { FloatingWidget } from '../ui/FloatingWidget';
import { Sun, Library, BarChart2, Users } from 'lucide-react';
import { SpinningText } from '../ui/SpinningText';

import principalImg from '../../../capturas/principal.jpeg';

export function Hero() {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error | duplicate
  const [csrfToken, setCsrfToken] = useState('');
  const honeypotRef = useRef(null);

  // Fetch CSRF token on mount
  useEffect(() => {
    fetch('/api/csrf')
      .then(r => r.json())
      .then(d => { if (d.csrf) setCsrfToken(d.csrf); })
      .catch(() => {});
  }, []);

  const getRecaptchaToken = () => {
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    if (!siteKey || !window.grecaptcha) return Promise.resolve('');
    return new Promise((resolve) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(siteKey, { action: 'subscribe' })
          .then(resolve)
          .catch(() => resolve(''));
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');

    try {
      const captchaToken = await getRecaptchaToken();

      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          csrf: csrfToken,
          token: captchaToken,
          _hp: honeypotRef.current?.value || '', // honeypot — humans leave this empty
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setEmail('');
        // Refresh CSRF token for next submit
        fetch('/api/csrf').then(r => r.json()).then(d => { if (d.csrf) setCsrfToken(d.csrf); }).catch(() => {});
      } else if (res.status === 429) {
        setStatus('ratelimit');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="hero-section">
      {/* Spinning text decoration — right lateral */}
      <div className="hero-spinning-text">
        <SpinningText
          duration={14}
          radius={4.5}
          style={{ fontSize: '0.78rem', fontWeight: 600, color: '#94a3b8', letterSpacing: '0.05em', width: '9ch', height: '9ch' }}
        >
          {'read more • read more • '}
        </SpinningText>
      </div>
      <div className="container hero-content">
        
        {/* Centered Top Section */}
        <div className="hero-text-area">
          <h1 className="hero-title hero-anim-title">Cumple con tu<br/>Objetivo de lectura</h1>
          <p className="hero-subtitle hero-anim-sub">
            Registra tus lecturas, mantén rachas diarias y comparte con amigos en clubes de lectura. Únete a Blek y transforma tu hábito de leer.
          </p>
          
          <form className="hero-form hero-anim-form" onSubmit={handleSubmit}>
            <div className="hero-input-wrapper">
              <BorderBeam size={200} duration={8} colorFrom="#007BA5" colorTo="#4DC1F5" borderWidth={2} />
              <input 
                id="hero-email"
                type="email" 
                placeholder="tu@correo.com" 
                className="hero-input"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
                required
                disabled={status === 'loading' || status === 'success'}
              />
              <button
                type="submit"
                className="hero-submit-btn"
                disabled={status === 'loading' || status === 'success'}
              >
                {status === 'loading' ? '...' : status === 'success' ? '✓' : 'Unirse'}
              </button>
            </div>

            {/* Honeypot — visually hidden, bots fill it, humans don't */}
            <input
              ref={honeypotRef}
              type="text"
              name="website"
              autoComplete="off"
              tabIndex={-1}
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
            />

            {/* Feedback messages */}
            {status === 'success' && (
              <p className="hero-form-msg hero-form-msg--success">
                🎉 ¡Ya estás en la lista! Te avisaremos cuando Blek esté listo.
              </p>
            )}
            {status === 'duplicate' && (
              <p className="hero-form-msg hero-form-msg--info">
                👋 ¡Ya te habías apuntado! Pronto tendrás noticias.
              </p>
            )}
            {status === 'ratelimit' && (
              <p className="hero-form-msg hero-form-msg--info">
                ⏳ Demasiados intentos. Espera un momento e inténtalo de nuevo.
              </p>
            )}
            {status === 'error' && (
              <p className="hero-form-msg hero-form-msg--error">
                Algo salió mal. Inténtalo de nuevo.
              </p>
            )}
          </form>

          <div className="hero-social-proof hero-anim-proof">
            <AvatarGroup>
              <Avatar src="https://api.dicebear.com/7.x/micah/svg?seed=Alex&backgroundColor=b6e3f4" />
              <Avatar src="https://api.dicebear.com/7.x/micah/svg?seed=Maria&backgroundColor=ffb18b" />
              <Avatar src="https://api.dicebear.com/7.x/micah/svg?seed=Sam&backgroundColor=ffd5dc" />
              <Avatar src="https://api.dicebear.com/7.x/micah/svg?seed=Taylor&backgroundColor=c0aede" />
            </AvatarGroup>
            <p className="hero-social-text">Más de 2,000 lectores ya se han unido.</p>
          </div>
        </div>

        {/* Floating Mockup Area */}
        <div className="hero-mockup-area">
          {/* Back radial glow overlay */}
          <div className="hero-mockup-glow" />

          {/* Floating widgets — absolute positioned (desktop only) */}
          <FloatingWidget type="racha" title="Racha Semanal" value="Toca un día para registrar" icon={Sun} colorClass="fw-yellow" transformStyle="rotate(-8deg)" className="fw-pos-1" />
          <FloatingWidget type="stats" title="Minutos Leídos" value="340 min" icon={BarChart2} colorClass="fw-blue" transformStyle="rotate(6deg)" className="fw-pos-2" />
          <FloatingWidget type="goal" title="Meta Anual" value="14 / 20 libros" icon={Library} colorClass="fw-dark" transformStyle="rotate(-5deg)" className="fw-pos-3" />
          <FloatingWidget type="social" title="Familia Lectoras" value="" icon={Users} colorClass="fw-cyan" transformStyle="rotate(7deg)" className="fw-pos-4" />

          <div className="mockup-main hero-mockup-enter">
            <PhoneMockup mainImage={principalImg} />
          </div>
        </div>

        {/* Mobile-only widget grid — shows below the phone */}
        <div className="hero-mobile-widgets">
          <FloatingWidget type="racha" title="Racha Semanal" value="Toca un día para registrar" icon={Sun} colorClass="fw-yellow" transformStyle="none" className="hero-mw-item" />
          <FloatingWidget type="stats" title="Minutos Leídos" value="340 min" icon={BarChart2} colorClass="fw-blue" transformStyle="none" className="hero-mw-item" />
          <FloatingWidget type="goal" title="Meta Anual" value="14 / 20 libros" icon={Library} colorClass="fw-dark" transformStyle="none" className="hero-mw-item" />
          <FloatingWidget type="social" title="Familia Lectoras" value="" icon={Users} colorClass="fw-cyan" transformStyle="none" className="hero-mw-item" />
        </div>

      </div>
    </section>
  );
}
