import React from "react";
import { Helmet } from "react-helmet";
import TeX from "@matejmazur/react-katex";
import Layout from "../../components/layout";
import p5 from "p5";
import Sketch from "react-p5";
import { gridLines } from "../../p5-pixel-physics/gridLines";

const DampedHarmonicOscillator = () => {
  const pointRadius = 4;
  const [m, b, k] = [5, 0.05, 10];
  let [x1, x2, t, dt, tMax] = [0, 150, 0, 0.1, 50];

  function setup(p: p5, canvasParentRef: Element) {
    const canvas = p.createCanvas(400, 400);
    canvas.style("border", "solid");
    p.background(0);
    drawGridLines(p);
    p.stroke(0);

    p.noFill();
    p.stroke(255);
    p.translate(200, 200);
    drawRipple(p, x1, x2);
    p.stroke(0);
  }

  function draw(p: p5) {
    p.translate(200, 200);
    p.fill(
      200 + 50 * p.cos((2 * p.PI * t) / tMax),
      200 + 50 * p.sin((2 * p.PI * t) / tMax),
      200
    );
    p.ellipse(x1, x2, pointRadius, pointRadius);
    update();
    if (t > tMax) {
      p.noLoop();
      p.noFill();
      p.stroke(
        200 + 50 * p.cos((2 * p.PI * t) / tMax),
        200 + 50 * p.sin((2 * p.PI * t) / tMax),
        200
      );
      drawRipple(p, x1, x2);
    }
  }

  function update() {
    x1 += x2 * dt;
    x2 += (-b / m) * x2 - (k / m) * x1 * dt;
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

const Test = () => {
  return (
    <Layout>
      <Helmet>
        <title>Test</title>
      </Helmet>
      <h1>Damped Harmonic Oscillator</h1>
      <p>The equation for the damped harmonic oscillator.</p>
      <TeX math="m \dfrac{d^2x}{dt^2} + b \dfrac{dx}{dt} + kx = 0" block />
      <DampedHarmonicOscillator />
      <TeX math="test" block />
    </Layout>
  );
};

export default Test;
