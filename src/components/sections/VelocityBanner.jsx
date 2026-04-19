import React from "react";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../ui/ScrollVelocity";
import "./VelocityBanner.css";

export function VelocityBanner() {
  return (
    <section className="velocity-banner-section">
      <div className="velocity-banner-inner">
        <ScrollVelocityContainer className="velocity-container">
          <ScrollVelocityRow baseVelocity={60} direction={1}>
            Alcanza tu reto de lectura anual &nbsp;·&nbsp;
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={60} direction={-1}>
            Alcanza tu reto de lectura anual &nbsp;·&nbsp;
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
        {/* Fade edges */}
        <div className="velocity-fade-left" />
        <div className="velocity-fade-right" />
      </div>
    </section>
  );
}
