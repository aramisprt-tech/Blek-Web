import React from 'react';
import './StoreButtons.css';

export function StoreButtons() {
  return (
    <div className="store-buttons-container hero-anim-form">
      {/* Apple App Store Button */}
      <a 
        href="https://apps.apple.com/us/app/blek-app/id6767931342" 
        target="_blank" 
        rel="noopener noreferrer"
        className="official-store-link"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
          alt="Download on the App Store" 
          className="official-store-badge"
        />
      </a>

      {/* Google Play Button (Proximamente) */}
      <div className="official-store-wrapper">
        <span className="soon-badge">SOON</span>
        <div className="official-store-link disabled-store">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
            alt="Get it on Google Play" 
            className="official-store-badge play-store-badge"
          />
        </div>
      </div>
    </div>
  );
}
