import React from 'react';
import './PhoneMockup.css';

export function PhoneMockup({ 
  mainImage, 
  alt = "App Screen", 
  className = "" 
}) {
  return (
    <div className={`phone-mockup-wrapper ${className}`}>
      <div className="phone-hardware">
        {/* Notch - Dynamic Island style */}
        <div className="phone-notch">
          <div className="notch-camera"></div>
          <div className="notch-speaker"></div>
        </div>
        
        {/* Hardware buttons */}
        <div className="btn-mute"></div>
        <div className="btn-vol-up"></div>
        <div className="btn-vol-down"></div>
        <div className="btn-power"></div>
        
        {/* The Screen */}
        <div className="phone-screen">
          <div className="screen-content">
            {mainImage ? (
              <img src={mainImage} alt={alt} className="screen-img" />
            ) : (
              <div className="screen-placeholder">Blek App</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
