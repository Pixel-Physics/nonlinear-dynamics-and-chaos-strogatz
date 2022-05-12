import React from "react";
import p5 from "p5";
import Sketch from "react-p5";
import { Arrow } from "@pixel-physics-p5/p5/objects/arrow";

export const Arrows = () => {
  const arrow = new Arrow(0, 0, 200, 200);

  const setup = (p: p5, canvasParentRef: Element) => {
    const canvas = p.createCanvas(400, 400).parent(canvasParentRef);
    canvas.style('border', 'solid 2px black')
  };

  const draw = (p: p5) => {
    p.fill(0)
    arrow.draw(p);
  };
  return <Sketch setup={setup} draw={draw} />;
};
