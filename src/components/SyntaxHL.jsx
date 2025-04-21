import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const SyntaxHL = ({ code }) => {
  return (
    <SyntaxHighlighter language="javascript" style={tomorrow}>
      {code}
    </SyntaxHighlighter>
  );
};

export default SyntaxHL;
