import React from "react";
import FlipLink from "../components/FlipLink";

const RevealLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">instagram</FlipLink>
      <FlipLink href="#">linkedin</FlipLink>
      <FlipLink href="#">twitter</FlipLink>
    </div>
  );
};

export default RevealLinks;
