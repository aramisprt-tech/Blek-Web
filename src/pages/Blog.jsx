import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, getFeaturedPost } from '../data/blogPosts';
import './Blog.css';

const categories = ['Todos', 'Recomendaciones', 'Hábitos', 'No ficción', 'Comunidad'];

/* ── SVG icon library ────────────────────────────────────── */
export function BlogIcon({ name, size = 48, color = '#2563eb' }) {
  const icons = {
    books: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        <line x1="12" y1="6" x2="16" y2="6"/>
        <line x1="12" y1="10" x2="16" y2="10"/>
      </svg>
    ),
    clock: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    star: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    brain: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
      </svg>
    ),
    moon: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    ),
    users: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  };
  return icons[name] || icons.books;
}

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const featured = getFeaturedPost();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Blog de Lectura — Blek | Recomendaciones y hábitos lectores';
  }, []);

  const filtered = activeCategory === 'Todos'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const gridPosts = filtered.filter(p => p.slug !== featured.slug);

  return (
    <div className="blog-page">
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <div className="blog-hero-badge">
            <span className="blog-hero-badge-dot" />
            El blog de Blek
          </div>
          <h1 className="blog-hero-title">
            Lee más,<br />
            <span className="blog-hero-accent">vive más.</span>
          </h1>
          <p className="blog-hero-subtitle">
            Recomendaciones de libros, hábitos lectores y consejos para sacarle el máximo partido a tu tiempo de lectura. Todo en español.
          </p>
        </div>
      </section>

      <div className="blog-main">
        <div className="blog-card-container">
          {/* Featured post */}
          {activeCategory === 'Todos' && (
            <section className="blog-featured-wrap">
              <Link to={`/blog/${featured.slug}`} className="blog-featured-card">
                <div
                  className="blog-featured-cover"
                  style={{ '--cover-bg': featured.coverColor, '--cover-accent': featured.coverAccent }}
                >
                  <BlogIcon name={featured.icon} size={72} color={featured.coverAccent} />
                </div>
                <div className="blog-featured-body">
                  <div className="blog-featured-meta">
                    <span className="blog-tag" style={{ '--tag-color': featured.coverAccent }}>{featured.category}</span>
                    <span className="blog-dot">·</span>
                    <span className="blog-read-time">{featured.readTime}</span>
                    <span className="blog-dot">·</span>
                    <span className="blog-date">{featured.date}</span>
                  </div>
                  <h2 className="blog-featured-title">{featured.title}</h2>
                  <p className="blog-featured-excerpt">{featured.excerpt}</p>
                  <div className="blog-featured-cta">
                    Leer artículo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </section>
          )}

          {/* Category filter */}
          <div className="blog-filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                className={`blog-filter-btn ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <section className="blog-grid">
            {(activeCategory === 'Todos' ? gridPosts : filtered).map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="blog-card"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className="blog-card-cover"
                  style={{ '--cover-bg': post.coverColor }}
                >
                  <BlogIcon name={post.icon} size={44} color={post.coverAccent} />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-tag" style={{ '--tag-color': post.coverAccent }}>{post.category}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <span className="blog-card-date">{post.date}</span>
                </div>
              </Link>
            ))}

            {filtered.length === 0 && (
              <div className="blog-empty">
                <BlogIcon name="books" size={40} color="#cbd5e1" />
                <p>No hay artículos en esta categoría todavía.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
