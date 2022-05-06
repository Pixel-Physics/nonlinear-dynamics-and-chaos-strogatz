import React from "react";
import { Helmet } from "react-helmet";
import TeX from "@matejmazur/react-katex";
import Layout from "../../components/layout";
import p5 from "p5";
import Sketch from "react-p5";
import { gridLines } from "../../p5-pixel-physics/gridLines";

const DampedHarmonicOscillator = () => {
  const pointRadius = 4;
  const [m, b, k] = [5, -0.01, 10];
  let [x1, x2, t, dt, tMax] = [0, 100, 0, 0.1, 100];

  function setup(p: p5, canvasParentRef: Element) {
    const canvas = p.createCanvas(400, 400);
    canvas.style("border", "solid");
    // drawGridLines(p);
  }

  function draw(p: p5) {
    p.translate(200, 200);
    update();
    p.ellipse(x1, x2, pointRadius, pointRadius);
    if (t > tMax) p.noLoop();
  }

  function update() {
    x1 += x2 * dt;
    x2 += (-b / m) * x2 - (k / m) * x1 * dt;
    t += dt;
  }

  function drawGridLines(p: p5) {
    p.strokeWeight(0.25);
    gridLines(p);
    p.strokeWeight(1);
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
