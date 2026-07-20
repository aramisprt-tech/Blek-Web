import React from 'react';
import './ThreePhonesMockup.css';

export function ThreePhonesMockup() {
  return (
    <div className="three-phones-container hero-mockup-enter">
      {/* Back radial glow overlay */}
      <div className="hero-mockup-glow" />
      
      <div className="phone-wrapper phone-left">
        <img src="/movil2.png" alt="Blek App Activity" className="phone-img" />
      </div>
      
      <div className="phone-wrapper phone-right">
        <img src="/movil3.png" alt="Blek App Stats" className="phone-img" />
      </div>

      <div className="phone-wrapper phone-center">
        <img src="/MOVIL1.png" alt="Blek App Home" className="phone-img" />
      </div>
    </div>
  );
}
