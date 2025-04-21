import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";

const SECTION_HEIGHT = 1500;

const HeroParallax = () => {
  return (
    <section
      id="parallax-effect"
      className="relative w-full"
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
    >
      <div className="h-[200px] w-full" />
      <CenterImage />
      <div className="absolute bottom-0 right-0 left-0 h-96 bg-gradient-to-b from-zinc-200/0 to-white"></div>
      <ParallaxImages />
    </section>
  );
};

// -------------------------------------------------------------------------------------------------

const CenterImage = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)  `;
  return (
    <>
      <motion.div
        className="sticky top-0 h-screen w-full"
        style={{
          opacity,
          backgroundSize,
          clipPath,
          backgroundImage:
            'url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',

          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </>
  );
};

const ParallaxImages = () => {
  return (
    <div className="relative z-10 mx-auto  max-w-5xl px-4 pt-[200px]">
      <ParallaxImageCard
        src="https://images.unsplash.com/photo-1601892782633-675465fa7f3a?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        start={-200}
        end={250}
        className="mx-auto w-1/6"
      />
      <ParallaxImageCard
        src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        start={200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImageCard
        src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        start={0}
        end={-500}
        className="ml-5 w-5/12"
      />
      <ParallaxImageCard
        src="https://images.unsplash.com/photo-1447433865958-f402f562b843?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        start={0}
        end={-300}
        className="mx-50 w-2/6"
      />
    </div>
  );
};

const ParallaxImageCard = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      ref={ref}
      className={className}
      alt={alt}
      src={src}
      style={{ opacity, transform }}
    />
  );
};

export default HeroParallax;
