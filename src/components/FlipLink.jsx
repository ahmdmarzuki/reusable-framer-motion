import React from "react";
import { motion } from "motion/react";

const FlipLink = ({ children, href }) => {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{ lineHeight: 0.9 }}
    >
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
              key={i}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              key={i}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
};

export default FlipLink;
