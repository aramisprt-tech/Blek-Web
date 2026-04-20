import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';

export function NotFound() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  useEffect(() => {
    document.title = '404 — Página no encontrada | Blek';
    window.scrollTo(0, 0);
  }, []);

  // Floating particles animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W = canvas.width = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.5 + 0.8,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.5 + 0.15,
    }));

    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 123, 165, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="nf-page">
      <canvas ref={canvasRef} className="nf-canvas" aria-hidden="true" />

      <div className="nf-card">
        {/* Animated book icon */}
        <div className="nf-icon-wrap">
          <svg className="nf-book" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="10" width="42" height="56" rx="5" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <rect x="10" y="12" width="6" height="52" rx="3" fill="#2563eb" opacity="0.3"/>
            <line x1="24" y1="26" x2="44" y2="26" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
            <line x1="24" y1="34" x2="44" y2="34" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
            <line x1="24" y1="42" x2="36" y2="42" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
            {/* Question mark */}
            <circle cx="58" cy="22" r="16" fill="#007BA5"/>
            <text x="58" y="28" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="system-ui">?</text>
          </svg>
        </div>

        {/* 404 number */}
        <div className="nf-number">404</div>

        <h1 className="nf-title">Página no encontrada</h1>
        <p className="nf-subtitle">
          Parece que este libro no está en nuestra estantería.<br />
          Puede que la URL esté mal escrita o la página haya sido eliminada.
        </p>

        {/* Actions */}
        <div className="nf-actions">
          <Link to="/" className="nf-btn nf-btn--primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Volver al inicio
          </Link>
          <Link to="/blog" className="nf-btn nf-btn--secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
            Ir al blog
          </Link>
        </div>

        {/* Quick links */}
        <div className="nf-links">
          <span className="nf-links-label">O visita:</span>
          <button className="nf-link" onClick={() => navigate(-1)}>← Volver atrás</button>
          <span className="nf-links-sep">·</span>
          <Link to="/privacidad" className="nf-link">Privacidad</Link>
          <span className="nf-links-sep">·</span>
          <Link to="/terminos" className="nf-link">Términos</Link>
        </div>
      </div>
    </div>
  );
}
