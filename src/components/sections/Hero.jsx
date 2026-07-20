import React from 'react';
import './Hero.css';
import { StoreButtons } from '../ui/StoreButtons';
import { ThreePhonesMockup } from '../ui/ThreePhonesMockup';
import { FloatingWidget } from '../ui/FloatingWidget';
import { Sun, Library, BarChart2, Users } from 'lucide-react';
import { SpinningText } from '../ui/SpinningText';

export function Hero() {
  return (
    <section className="hero-section">
      {/* Spinning text decoration — right lateral */}
      <div className="hero-spinning-text">
        <SpinningText
          duration={14}
          radius={4.5}
          style={{ fontSize: '0.78rem', fontWeight: 600, color: '#94a3b8', letterSpacing: '0.05em', width: '9ch', height: '9ch' }}
        >
          {'read more • read more • '}
        </SpinningText>
      </div>
      <div className="container hero-content">
        
        {/* Centered Top Section */}
        <div className="hero-text-area">
          <h1 className="hero-title hero-anim-title">Blek: La app de libros<br/><span className="hero-title-line-2">para el tracking de tus lecturas</span></h1>
          <p className="hero-subtitle hero-anim-sub">
            Registra cada página, mantén tu racha diaria y cumple tus metas anuales. Únete a clubes y convierte tu pasión en un hábito con la mejor app de tracking de libros.
          </p>
          
          <StoreButtons />
        </div>

        {/* Floating Mockup Area */}
        <div className="hero-mockup-area">
          {/* Floating widgets — absolute positioned (desktop only) */}
          <FloatingWidget type="racha" title="Racha Semanal" value="Toca un día para registrar" icon={Sun} colorClass="fw-yellow" transformStyle="rotate(-8deg)" className="fw-pos-1" />
          <FloatingWidget type="stats" title="Minutos Leídos" value="340 min" icon={BarChart2} colorClass="fw-blue" transformStyle="rotate(6deg)" className="fw-pos-2" />
          <FloatingWidget type="goal" title="Meta Anual" value="14 / 20 libros" icon={Library} colorClass="fw-dark" transformStyle="rotate(-5deg)" className="fw-pos-3" />
          <FloatingWidget type="social" title="Familia Lectoras" value="" icon={Users} colorClass="fw-cyan" transformStyle="rotate(7deg)" className="fw-pos-4" />

          <ThreePhonesMockup />
        </div>

        {/* Mobile-only widget grid — shows below the phone */}
        <div className="hero-mobile-widgets">
          <FloatingWidget type="racha" title="Racha Semanal" value="Toca un día para registrar" icon={Sun} colorClass="fw-yellow" transformStyle="none" className="hero-mw-item" />
          <FloatingWidget type="stats" title="Minutos Leídos" value="340 min" icon={BarChart2} colorClass="fw-blue" transformStyle="none" className="hero-mw-item" />
          <FloatingWidget type="goal" title="Meta Anual" value="14 / 20 libros" icon={Library} colorClass="fw-dark" transformStyle="none" className="hero-mw-item" />
          <FloatingWidget type="social" title="Familia Lectoras" value="" icon={Users} colorClass="fw-cyan" transformStyle="none" className="hero-mw-item" />
        </div>

      </div>
    </section>
  );
}
