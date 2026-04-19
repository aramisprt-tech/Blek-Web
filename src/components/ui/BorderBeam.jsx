import React from 'react';
import './BorderBeam.css';

export function BorderBeam({
  className = '',
  size = 250,
  duration = 8,
  borderWidth = 2,
  colorFrom = '#007BA5',
  colorTo = '#4DC1F5',
  delay = 0,
}) {
  return (
    <div
      className={`border-beam-wrapper ${className}`}
      style={{
        '--bb-size': `${size}px`,
        '--bb-duration': `${duration}s`,
        '--bb-border-width': `${borderWidth}px`,
        '--bb-color-from': colorFrom,
        '--bb-color-to': colorTo,
        '--bb-delay': `-${delay}s`,
      }}
    >
      <div className="border-beam-glow"></div>
    </div>
  );
}
