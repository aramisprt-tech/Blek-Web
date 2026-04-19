import React from "react";
import { motion } from "motion/react";

const BASE_TRANSITION = {
  repeat: Infinity,
  ease: "linear",
};

const BASE_ITEM_VARIANTS = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export function SpinningText({
  children,
  duration = 10,
  reverse = false,
  radius = 5,
  transition,
  variants,
  className = "",
  style,
}) {
  let text = Array.isArray(children) ? children.join("") : children;
  const letters = text.split("");
  letters.push(" ");

  const finalTransition = {
    ...BASE_TRANSITION,
    ...transition,
    duration: transition?.duration ?? duration,
  };

  const containerVariants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...variants?.container,
  };

  const itemVariants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  };

  return (
    <motion.div
      className={`spinning-text-root ${className}`}
      style={{ position: "relative", ...style }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={finalTransition}
    >
      {letters.map((letter, index) => (
        <motion.span
          aria-hidden="true"
          key={`${index}-${letter}`}
          variants={itemVariants}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            display: "inline-block",
            transform: `
              translate(-50%, -50%)
              rotate(${(360 / letters.length) * index}deg)
              translateY(calc(${radius} * -1ch))
            `,
            transformOrigin: "center",
          }}
        >
          {letter}
        </motion.span>
      ))}
      <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
        {text}
      </span>
    </motion.div>
  );
}
