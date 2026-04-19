import React, { Children } from 'react';
import './AvatarGroup.css';

export function AvatarGroup({ children }) {
  return (
    <div className="avatar-group">
      {Children.map(children, (child, index) => (
        <div 
          className="avatar-wrapper"
          style={{ '--avatar-index': index }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export function Avatar({ src, fallback, alt = "Avatar" }) {
  return (
    <div className="avatar">
      {src ? (
        <img src={src} alt={alt} className="avatar-img" />
      ) : (
        <span className="avatar-fallback">{fallback}</span>
      )}
    </div>
  );
}
