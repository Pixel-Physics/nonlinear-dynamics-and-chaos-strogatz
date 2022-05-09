import p5 from "p5";
import React from "react";
import Sketch from "react-p5";
import { gridLines } from "../../pixel-physics-p5/gridLines";
import {
  defaultHarmonicOscillatorProps as defaultProps,
  HarmonicOscillatorProps as Props,
} from "./common";

export const DampedHarmonicOscillatorPhaseSpace = ({
  m = defaultProps.m,
  b = defaultProps.b,
  k = defaultProps.k,
  x = defaultProps.x,
  v = defaultProps.v,
  t = defaultProps.t,
  dt = defaultProps.dt,
  tMax = defaultProps.tMax,
}: Props) => {
  const pointRadius = 4;

  function setup(p: p5, canvasParentRef: Element) {
    const canvas = p.createCanvas(400, 400).parent(canvasParentRef);
    p.background(0);
    drawGridLines(p);
    p.stroke(0);

    p.translate(p.width / 2, p.height / 2);

    p.noFill();
    p.stroke(255);
    drawRipple(p, x, v);
    p.stroke(0);
  }

  function draw(p: p5) {
    p.translate(p.width / 2, p.height / 2);
    p.fill(
      200 + 50 * p.cos((2 * p.PI * t) / tMax),
      200 + 50 * p.sin((2 * p.PI * t) / tMax),
      200
    );
    p.ellipse(x, v, pointRadius, pointRadius);
    update();
    if (t > tMax) {
      p.noLoop();
      p.noFill();
      p.stroke(
        200 + 50 * p.cos((2 * p.PI * t) / tMax),
        200 + 50 * p.sin((2 * p.PI * t) / tMax),
        200
      );
      drawRipple(p, x, v);
    }
  }

  function update() {
    x += v * dt;
    v += ((-b / m) * v - (k / m) * x) * dt;
    t += dt;
  }

  function drawGridLines(p: p5) {
    p.stroke(255);
    p.strokeWeight(0.25);
    gridLines(p);
    p.strokeWeight(1);
  }

  function drawRipple(p: p5, x1: number, x2: number) {
    for (let i = 1; i < 5; i += 1) {
      const rippleRadius = i * 8;
      p.ellipse(x1, x2, pointRadius + rippleRadius, pointRadius + rippleRadius);
    }
  }

  return <Sketch setup={setup} draw={draw} />;
};
