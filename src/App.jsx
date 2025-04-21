import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import SyntaxHL from "./components/SyntaxHL";
import FlipText from "./pages/FlipText";
import NavSection from "./components/NavSection";
import ReactLenis from "lenis/react";
import HeroParallax from "./pages/ParallaxImages";
import Tes from "./pages/Tes";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      <div className="flex flex-row">
        <NavSection />
        <div className="h-screen w-1/4 px-5 py-10 flex flex-col bg-white z-0 left-0 top-0" />
        <main className="flex-1">
          <FlipText />
          <HeroParallax />
          <section
            id="tes-sec"
            className="h-screen items-center flex justify-center"
          >
            <Tes />
          </section>
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;
