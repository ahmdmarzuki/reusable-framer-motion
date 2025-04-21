import React, { useState, useEffect } from "react";

const NavSection = () => {
  const navList = [
    { title: "Flip Text", href: "#flip-text" },
    { title: "Parallax Effect", href: "#parallax-effect" },
    { title: "Tessss", href: "#tes-sec" },
  ];

  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.target.id, entry.isIntersecting);
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0 } // Bisa kamu atur sesuai kebutuhan
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-screen w-1/4 px-5 py-10 flex flex-col bg-white z-10 fixed left-0 top-0">
      <h1 className="text-zinc-400 mb-4 font-medium ">Section</h1>

      {navList.map((nav, index) => (
        <a
          key={index}
          className={`pl-6 py-1.5 w-full font-medium hover:text-blue-400 hover:bg-zinc-100 ${
            activeId === nav.href ? "text-blue-400 bg-zinc-100" : ""
          }`}
          href={nav.href}
        >
          {nav.title}
        </a>
      ))}
      {/* <a className=" border-t  border-zinc-400 py-4 w-full" href="#flip-text">
        Flip Text
      </a>
      <a className=" border-t  border-zinc-400 py-4 w-full" href="#sec2">
        section 2
      </a>
      <a className=" border-t  border-zinc-400 py-4 w-full" href="#sec3">
        section 3
      </a>
      <a
        className=" border-t border-b  border-zinc-400 py-4 w-full"
        href="#sec4"
      >
        section 4
      </a> */}
    </div>
  );
};

export default NavSection;
