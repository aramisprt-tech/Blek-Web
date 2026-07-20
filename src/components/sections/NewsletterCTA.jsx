import React, { useState, useEffect, useRef } from 'react';
import './NewsletterCTA.css';
import { BorderBeam } from '../ui/BorderBeam';
import { AvatarGroup, Avatar } from '../ui/AvatarGroup';

export function NewsletterCTA() {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState('idle');
  const [csrfToken, setCsrfToken] = useState('');
  const honeypotRef = useRef(null);

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
          _hp: honeypotRef.current?.value || '', 
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setEmail('');
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
    <section className="newsletter-section">
      <div className="container newsletter-content">
        <h2 className="newsletter-title">¿Quieres leer más y mejor?</h2>
        <p className="newsletter-subtitle">
          Suscríbete a nuestro boletín y recibe recomendaciones de libros, trucos para crear el hábito y novedades de Blek.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="newsletter-input-wrapper">
            <BorderBeam size={200} duration={8} colorFrom="#007BA5" colorTo="#4DC1F5" borderWidth={2} />
            <input 
              id="newsletter-email"
              type="email" 
              placeholder="tu@correo.com" 
              className="newsletter-input"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
              required
              disabled={status === 'loading' || status === 'success'}
            />
            <button
              type="submit"
              className="newsletter-submit-btn"
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' ? '...' : status === 'success' ? '✓' : 'Suscribirme'}
            </button>
          </div>

          <input
            ref={honeypotRef}
            type="text"
            name="website"
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
          />

          {status === 'success' && (
            <p className="newsletter-form-msg newsletter-form-msg--success">
              🎉 ¡Te has suscrito correctamente!
            </p>
          )}
          {status === 'duplicate' && (
            <p className="newsletter-form-msg newsletter-form-msg--info">
              👋 ¡Ya estabas suscrito a nuestro boletín!
            </p>
          )}
          {status === 'ratelimit' && (
            <p className="newsletter-form-msg newsletter-form-msg--info">
              ⏳ Demasiados intentos. Espera un momento e inténtalo de nuevo.
            </p>
          )}
          {status === 'error' && (
            <p className="newsletter-form-msg newsletter-form-msg--error">
              Algo salió mal. Inténtalo de nuevo.
            </p>
          )}
        </form>

        <div className="newsletter-social-proof">
          <AvatarGroup>
            <Avatar src="https://api.dicebear.com/7.x/micah/svg?seed=Alex&backgroundColor=b6e3f4" />
            <Avatar src="https://api.dicebear.com/7.x/micah/svg?seed=Maria&backgroundColor=ffb18b" />
            <Avatar src="https://api.dicebear.com/7.x/micah/svg?seed=Sam&backgroundColor=ffd5dc" />
            <Avatar src="https://api.dicebear.com/7.x/micah/svg?seed=Taylor&backgroundColor=c0aede" />
          </AvatarGroup>
          <p className="newsletter-social-text">Más de 2,000 lectores ya usan Blek.</p>
        </div>
      </div>
    </section>
  );
}
