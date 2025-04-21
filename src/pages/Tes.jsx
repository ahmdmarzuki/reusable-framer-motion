import React from "react";
import { motion } from "motion/react";

const Tes = () => {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  const text1 = "you";
  const text2 = "itb";

  return (
    <div className="gap-6 flex relative overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-6xl md:text-7xl lg:text-8xl">
      <div>FUCK</div>
      <motion.a
        initial="initial"
        whileHover="hovered"
        href="#"
        className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-6xl md:text-7xl lg:text-8xl"
      >
        <div>
          {text1.split("").map((l, i) => {
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
          {text2.split("").map((l, i) => {
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
    </div>
  );
};

export default Tes;
