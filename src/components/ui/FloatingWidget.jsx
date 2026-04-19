import React from 'react';
import './FloatingWidget.css';

export function FloatingWidget({ type, title, value, icon: Icon, colorClass, animationDelay, transformStyle, className }) {
  
  const renderWidgetContent = () => {
    switch(type) {
      case 'racha':
        return (
          <div className="fw-content">
            <p className="fw-racha-label">RACHA SEMANAL</p>
            <div className="fw-racha-main">
              <div className={`fw-sun-icon ${colorClass}`}>
                {Icon && <Icon size={20} strokeWidth={1.5} />}
              </div>
              <span className="fw-racha-text">{value}</span>
            </div>
            <div className="fw-weekly-days">
              <div className="fw-dias-counter">
                <span className="fw-dias-num">0</span>
                <span className="fw-dias-text">DÍAS</span>
              </div>
              {['Lu','Ma','Mi','Ju','Vi','Sá','Do'].map((day, i) => (
                <div key={i} className="fw-day-item">
                  <div className={`fw-day-dot${i === 3 ? ' fw-day-today' : ''}`}></div>
                  <span className="fw-day-name">{day}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'stats':
        return (
          <div className="fw-content">
            <div className="fw-header">
              <div className="fw-text">
                 <span className="fw-title">{title}</span>
                 <span className="fw-value fw-value-large">{value}</span>
              </div>
              <div className={`fw-icon fw-icon-right ${colorClass}`}>
                {Icon && <Icon size={20} />}
              </div>
            </div>
            <div className="fw-chart">
               <div className="fw-bar h-40"></div>
               <div className="fw-bar h-70"></div>
               <div className="fw-bar h-100 fw-bar-active"></div>
               <div className="fw-bar h-60"></div>
            </div>
          </div>
        );
      case 'goal':
        return (
          <div className="fw-content">
            <div className="fw-header">
              <div className={`fw-icon ${colorClass}`}>
                {Icon && <Icon size={20} strokeWidth={2.5}/>}
              </div>
              <div className="fw-text">
                <span className="fw-title">{title}</span>
                <span className="fw-value">{value}</span>
              </div>
            </div>
            <div className="fw-progress">
              <div className="fw-progress-bar" style={{ width: '70%' }}></div>
            </div>
          </div>
        );
      case 'social':
        return (
          <div className="fw-content">
            <div className="fw-header fw-header-row">
               <span className="fw-title">{title}</span>
               <div className={`fw-badge ${colorClass}`}>Nuevo</div>
            </div>
            <div className="fw-social-group">
               <div className="fw-avatar"><img src="https://api.dicebear.com/7.x/micah/svg?seed=Leo&backgroundColor=b6e3f4" alt="avatar" /></div>
               <div className="fw-avatar"><img src="https://api.dicebear.com/7.x/micah/svg?seed=Mia&backgroundColor=ffb18b" alt="avatar" /></div>
               <div className="fw-avatar"><img src="https://api.dicebear.com/7.x/micah/svg?seed=Eli&backgroundColor=ffd5dc" alt="avatar" /></div>
               <div className="fw-avatar fw-avatar-more">+4</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`floating-widget-positioner ${className || ''}`}
      style={{ transform: transformStyle }}
    >
      <div 
        className="floating-widget-animator"
      >
        <div className="floating-widget-glass">
           {renderWidgetContent()}
        </div>
      </div>
    </div>
  );
}
