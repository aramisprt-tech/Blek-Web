import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";

function useWindowWidth() {
  const [width, setWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

export function ScrollVelocityContainer({ children, className = "" }) {
  return (
    <div className={`scroll-velocity-container ${className}`}>
      {children}
    </div>
  );
}

export function ScrollVelocityRow({
  children,
  baseVelocity = 5,
  direction = 1,
  scrollReactivity = true,
  className = "",
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    [0, 1000],
    [0, 5],
    { clamp: false }
  );

  // wrap range for seamless looping
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const directionFactor = useRef(direction);

  useAnimationFrame((t, delta) => {
    let moveBy = (directionFactor.current * baseVelocity * (delta / 1000)) / 100;

    if (scrollReactivity) {
      if (velocityFactor.get() < 0) {
        directionFactor.current = -direction;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = direction;
      }
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
    }

    baseX.set(baseX.get() + moveBy);
  });

  // Duplicate content for seamless loop
  const spans = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
    <span key={i} className="scroll-velocity-item">
      {children}{" "}
    </span>
  ));

  return (
    <div className={`scroll-velocity-row-wrapper ${className}`}>
      <motion.div className="scroll-velocity-row" style={{ x }}>
        {spans}
      </motion.div>
    </div>
  );
}
