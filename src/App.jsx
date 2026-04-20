import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DotPattern } from './components/ui/DotPattern';
import { SmoothCursor } from './components/ui/SmoothCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Showcase } from './components/sections/Showcase';
import { VelocityBanner } from './components/sections/VelocityBanner';
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

  return (
    <main>
      <Hero />
      <VelocityBanner />
      <Showcase />
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
