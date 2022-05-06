import React from "react";
import { Helmet } from "react-helmet";
import TeX from "@matejmazur/react-katex";
import Layout from "../../components/layout";
import p5 from "p5";
import Sketch from "react-p5";

const DampedHarmonicOscillator = () => {
  const pointRadius = 5;
  const [m, b, k] = [5, -0.01, 10];
  let [x1, x2, t, dt] = [0, 100, 0, 0.1];

  function setup(p: p5, canvasParentRef: Element) {
    const canvas = p.createCanvas(400, 400);
    canvas.style("border", "solid");
  }

  function draw(p: p5) {
    p.translate(200, 200);
    update();
    p.ellipse(x1, x2, pointRadius, pointRadius);
  }

  function update() {
    x1 += x2 * dt;
    x2 += (-b / m) * x2 - (k / m) * x1 * dt;
    t += dt;
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
