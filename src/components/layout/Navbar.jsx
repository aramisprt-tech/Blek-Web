import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import textLogo from '../../../logos/text-logo.png';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src={textLogo} alt="Blek" className="navbar-text" />
        </Link>

        {/* Desktop CTA */}
        <div className="navbar-actions navbar-actions--desktop">
          <button className="navbar-btn" onClick={() => document.getElementById('hero-email')?.focus()}>
            Unirse
          </button>
        </div>



        {/* Hamburger button (mobile only) */}
        <button
          className={`navbar-hamburger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="navbar-mobile-menu">
          <button
            className="navbar-btn navbar-mobile-cta"
            onClick={() => { setMenuOpen(false); document.getElementById('hero-email')?.focus(); }}
          >
            Unirse
          </button>
        </nav>
      )}
    </header>
  );
}
