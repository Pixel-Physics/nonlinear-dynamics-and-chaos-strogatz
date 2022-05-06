import React from "react";
import { Helmet } from "react-helmet";
import TeX from "@matejmazur/react-katex";
import Layout from "../../components/layout";
import p5 from "p5";
import Sketch from "react-p5";
import { DampedHarmonicOscillatorPhaseSpace } from "@sketches/harmonicOscillator/dampedHarmonicOscillatorPhaseSpace";

export const Test = () => {
  return (
    <Layout>
      <Helmet>
        <title>Test</title>
      </Helmet>
      <h1>Damped Harmonic Oscillator</h1>

      <p>The equation for the damped harmonic oscillator.</p>
      <TeX math="m \dfrac{d^2x}{dt^2} + b \dfrac{dx}{dt} + kx = 0" block />
      <DampedHarmonicOscillator />

      <p>A phase space diagram for the damped harmonic oscillator</p>
      <TeX block>
        {String.raw`
        \begin{cases}\
          \dot{x} = v,\\
          \dot{v} = -\dfrac{b}{m}v -\dfrac{k}{m}x\
        \end{cases}
        `}
      </TeX>
      <DampedHarmonicOscillatorPhaseSpace />
    </Layout>
  );
};

export default Test;

const DampedHarmonicOscillator = () => {
  function setup(p: p5, canvasParentRef: Element) {
    const canvas = p.createCanvas(400, 400).parent(canvasParentRef);
    canvas.style("border", "solid");
    canvas.style("margin", "0px auto");
    canvas.style("display", "block");
  }

  function draw(p: p5) {
    p.noLoop();
  }

  return <Sketch setup={setup} draw={draw} />;
};
