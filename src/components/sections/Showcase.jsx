import React, { useState, useRef } from 'react';
import './Showcase.css';
import { PhoneMockup } from '../ui/PhoneMockup';
import { BookOpen, BarChart2, UserCircle } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

import imgLibrary from '../../../capturas/secundaria.jpeg';
import imgStats from '../../../capturas/IMG_7348.jpeg';
import imgProfile from '../../../capturas/IMG_7347.jpeg';

const features = [
  {
    id: 0,
    title: 'Tu biblioteca personal',
    description: 'Añade libros a tu estantería digital, organiza tus lecturas actuales y establece una meta anual para mantenerte motivado todo el año.',
    icon: BookOpen,
    image: imgLibrary
  },
  {
    id: 1,
    title: 'Análisis y estadísticas',
    description: 'Descubre cuántas horas y días pasas leyendo. Visualiza tus patrones de lectura con gráficos claros y mantén tu racha diaria en llamas.',
    icon: BarChart2,
    image: imgStats
  },
  {
    id: 2,
    title: 'Comunidad lectora',
    description: 'Tu perfil es tu carta de presentación literaria. Conecta con otros lectores, mira lo que están leyendo y únete a los mejores clubes de lectura.',
    icon: UserCircle,
    image: imgProfile
  }
];

export function Showcase() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section className="showcase-section" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="showcase-header">
          <span data-reveal className="badge reveal-up reveal-delay-1">Explora Blek</span>
          <h2 data-reveal className="showcase-title reveal-up reveal-delay-2">La red social de los libros</h2>
          <p data-reveal className="showcase-subtitle reveal-up reveal-delay-3">
            Todo lo que necesitas para que tu hábito de lectura sea constante, divertido y social.
          </p>
        </div>

        {/* Interactive Showcase Area */}
        <div className="showcase-grid">
          
          {/* Left: Tab List */}
          <div data-reveal className="showcase-tabs reveal-left reveal-delay-2">
            {features.map((feature, index) => {
              const isActive = activeTab === index;
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.id} 
                  className={`showcase-tab ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {/* Left border indicator like the Monex reference */}
                  <div className="tab-indicator"></div>
                  
                  <div className="tab-content">
                    <div className="tab-icon-wrapper">
                      <Icon size={24} className={isActive ? 'icon-active' : 'icon-muted'} />
                      <h3 className={`tab-title ${isActive ? 'title-active' : 'title-muted'}`}>
                        {feature.title}
                      </h3>
                    </div>
                    {isActive && (
                      <p className="tab-description animate-fade-in">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Half Mockup */}
          <div data-reveal className="showcase-visual reveal-right reveal-delay-3">
            <div className="showcase-visual-card">
              <div className="showcase-mockup-wrapper animate-fade-in" key={activeTab}>
                 <PhoneMockup mainImage={features[activeTab].image} className="showcase-phone" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
