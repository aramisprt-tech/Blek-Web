import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPostBySlug, getRelatedPosts } from '../data/blogPosts';
import { BlogIcon } from './Blog';
import './BlogPost.css';

export function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const related = post ? getRelatedPosts(slug, 3) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
      document.title = `${post.title} — Blek Blog`;
    }
  }, [slug, post]);

  if (!post) {
    return (
      <div className="blogpost-notfound">
        <BlogIcon name="books" size={48} color="#cbd5e1" />
        <h1>Artículo no encontrado</h1>
        <p>Este artículo no existe o ha sido eliminado.</p>
        <Link to="/blog" className="blogpost-back-btn">Volver al blog</Link>
      </div>
    );
  }

  return (
    <div className="blogpost-page">
      {/* Back nav */}
      <div className="blogpost-breadcrumb">
        <Link to="/blog" className="blogpost-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Blog
        </Link>
        <span className="blogpost-breadcrumb-sep">/</span>
        <span className="blog-tag" style={{ '--tag-color': post.coverAccent }}>{post.category}</span>
      </div>

      <article className="blogpost-article">
        {/* Cover */}
        <div
          className="blogpost-cover"
          style={{ '--cover-bg': post.coverColor, '--cover-accent': post.coverAccent }}
        >
          <BlogIcon name={post.icon} size={80} color={post.coverAccent} />
        </div>

        {/* Header */}
        <header className="blogpost-header">
          <div className="blogpost-meta">
            <span className="blog-tag" style={{ '--tag-color': post.coverAccent }}>{post.category}</span>
            <span className="blog-dot">·</span>
            <span className="blog-read-time">{post.readTime} de lectura</span>
            <span className="blog-dot">·</span>
            <span className="blog-date">{post.date}</span>
          </div>
          <h1 className="blogpost-title">{post.title}</h1>
          <p className="blogpost-excerpt">{post.excerpt}</p>
        </header>

        {/* Content */}
        <div
          className="blogpost-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="blogpost-related">
          <h2 className="blogpost-related-title">También te puede interesar</h2>
          <div className="blogpost-related-grid">
            {related.map(rp => (
              <Link key={rp.slug} to={`/blog/${rp.slug}`} className="blog-card blogpost-related-card">
                <div className="blog-card-cover" style={{ '--cover-bg': rp.coverColor }}>
                  <BlogIcon name={rp.icon} size={40} color={rp.coverAccent} />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-tag" style={{ '--tag-color': rp.coverAccent }}>{rp.category}</span>
                    <span className="blog-read-time">{rp.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">{rp.title}</h3>
                  <span className="blog-card-date">{rp.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
