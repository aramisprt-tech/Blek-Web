import React from 'react';
import './Features.css';
import { Clock, Flame, Library, Users, MessageCircle } from 'lucide-react';

export function Features() {
  const featureList = [
    {
      icon: <Clock size={28} />,
      title: 'Timer de Lectura',
      description: 'Mide tu tiempo de lectura diario. Mantén el enfoque y descubre cuánto tardas en devorar tus libros favoritos.'
    },
    {
      icon: <Flame size={28} />,
      title: 'Rachas Motivadoras',
      description: 'Crea el hábito. Visualiza tu progreso con rachas que te animarán a abrir un libro al menos un ratito cada día.'
    },
    {
      icon: <Library size={28} />,
      title: 'Tu Estantería',
      description: 'Organiza tu biblioteca digital. Libros leídos, por leer y abandonados, todo en un solo lugar hermoso.'
    },
    {
      icon: <Users size={28} />,
      title: 'Conecta con Amigos',
      description: 'Mira qué están leyendo tus amigos, comparte reseñas y descubre tus próximas aventuras literarias a través de ellos.'
    },
    {
      icon: <MessageCircle size={28} />,
      title: 'Clubes de Lectura',
      description: 'Únete o crea clubes de lectura. Comenta cada capítulo en tiempo real con una comunidad apasionada.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="features-title">Todo lo que necesitas para tu hábito de lectura</h2>
        
        <div className="features-content">
          <div className="features-grid">
            {featureList.map((feat, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{feat.icon}</div>
                <h3 className="feature-card-title">{feat.title}</h3>
                <p className="feature-card-desc">{feat.description}</p>
              </div>
            ))}
          </div>
          
          <div className="features-illustration">
            <div className="illustration-wrapper">
              <img src="/illustration.png" alt="Blek App Illustration" className="illustration-img" />
              <div className="illustration-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
