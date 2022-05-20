import React from "react";
import { Link } from "gatsby";

export const TOC = () => {
  const tocLinks: { to: string; text?: string }[] = [
    { to: "/", text: "home" },
    { to: "/damped-harmonic-oscillator" },
  ];
  return (
    <ul>
      {tocLinks.map(({ to, text }) => (
        <li>
          <Link to={to}>{text || to.replace(/[-\/]/g, " ")}</Link>
        </li>
      ))}
    </ul>
  );
};
