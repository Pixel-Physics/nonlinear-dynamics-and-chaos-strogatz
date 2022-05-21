import React from "react";
import { Link } from "gatsby";

export const TOC = () => {
  const tocLinks: { to: string; text?: string }[] = [
    { to: "/", text: "home" },
    { to: "/brainstorm", text: "brainstorm" },
    { to: "/damped-harmonic-oscillator" },
  ];
  return (
    <ul>
      {tocLinks.map(({ to, text }) => (
        <li key={to}>
          <Link to={to}>{text || to.replace(/[-\/]/g, " ")}</Link>
        </li>
      ))}
    </ul>
  );
};
