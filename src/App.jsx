import { useState } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import SyntaxHL from "./components/SyntaxHL";
import RevealLinks from "./pages/RevealLinks";

function App() {
  const code = `
  function helloWorld() {
    console.log("Hello, world!");
  }
  `;

  return <RevealLinks />;
}

export default App;
