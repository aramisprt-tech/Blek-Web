import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DotPattern } from './components/ui/DotPattern';
import { SmoothCursor } from './components/ui/SmoothCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Showcase } from './components/sections/Showcase';
import { VelocityBanner } from './components/sections/VelocityBanner';
import { NewsletterCTA } from './components/sections/NewsletterCTA';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { NotFound } from './pages/NotFound';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

function Home() {
  const footerRef = useRef(null);
  useScrollReveal(footerRef);

  useEffect(() => {
    const setMetaTag = ({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let tag = document.head.querySelector(selector);

      if (!tag) {
        tag = document.createElement('meta');
        if (name) tag.setAttribute('name', name);
        if (property) tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }

      tag.setAttribute('content', content);
    };

    document.title = 'Blek | App de libros para registrar lecturas y cumplir metas';

    setMetaTag({
      name: 'description',
      content: 'Blek es la app de libros en español para registrar lecturas, mantener rachas diarias, cumplir metas anuales y unirte a clubes de lectura.',
    });
    setMetaTag({
      name: 'keywords',
      content: 'blek, app de libros, app de lectura, registrar libros leídos, seguimiento de lectura, meta de lectura, clubes de lectura',
    });
    setMetaTag({ name: 'robots', content: 'index, follow' });

    setMetaTag({
      property: 'og:title',
      content: 'Blek | App de libros para registrar lecturas y cumplir metas',
    });
    setMetaTag({
      property: 'og:description',
      content: 'Registra libros leídos, mantén rachas diarias, cumple tus metas anuales y comparte en clubes de lectura con Blek.',
    });
    setMetaTag({ property: 'og:url', content: 'https://blekapp.com/' });

    setMetaTag({
      name: 'twitter:title',
      content: 'Blek | App de libros para registrar lecturas y cumplir metas',
    });
    setMetaTag({
      name: 'twitter:description',
      content: 'Blek te ayuda a registrar lecturas, crear hábito con rachas y alcanzar tu objetivo anual de libros.',
    });

    let canonicalTag = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', 'https://blekapp.com/');
  }, []);

  return (
    <main>
      <Hero />
      <VelocityBanner />
      <Showcase />
      <NewsletterCTA />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <DotPattern
          glow={false}
          width={22}
          height={22}
          cx={1}
          cy={1}
          cr={0.8}
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, white 50%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, white 50%, transparent 100%)',
            opacity: 0.8,
          }}
        />
        <SmoothCursor />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/terminos" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
