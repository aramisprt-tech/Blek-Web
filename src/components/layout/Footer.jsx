import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import textLogo from '../../../logos/text-logo.png';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-root">
      <div className="footer-inner">

        {/* Top row */}
        <div className="footer-top">

          {/* Left: brand + tagline + nav */}
          <div className="footer-left">
            <Link to="/" className="footer-brand">
              <img src={textLogo} alt="Blek" className="footer-logo" />
            </Link>
            <p className="footer-tagline">
              Tu estantería de libros digital.<br />
              Lee más, comparte más, <span className="footer-accent">crece más</span>.
            </p>
            <nav className="footer-nav">
              <Link to="/privacidad">Política de privacidad</Link>
              <Link to="/terminos">Términos de uso</Link>
            </nav>
          </div>



        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom row */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} Blek. Todos los derechos reservados.
          </p>
          <div className="footer-socials">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/blek.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Blek"
              className="footer-social-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@blek.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de Blek"
              className="footer-social-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.16 8.16 0 004.77 1.52V7.02a4.85 4.85 0 01-1-.33z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
