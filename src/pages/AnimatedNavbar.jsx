import React, { useRef, useState } from "react";
import { motion } from "motion/react";

const AnimatedNavbar = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <section className="h-screen flex justify-center items-center">
      <ul className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1">
        <Tab setPosition={setPosition}>home</Tab>
        <Tab setPosition={setPosition}>about</Tab>
        <Tab setPosition={setPosition}>feature</Tab>
        <Tab setPosition={setPosition}>contact</Tab>

        <Cursor position={position} />
      </ul>
    </section>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        console.log(width);

        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    ></motion.li>
  );
};

export default AnimatedNavbar;
