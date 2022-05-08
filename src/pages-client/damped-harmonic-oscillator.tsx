import React from "react";
import { Helmet } from "react-helmet";
import TeX from "@matejmazur/react-katex";
import Layout from "@layout/default";
import {
  DampedHarmonicOscillatorPhaseSpace,
  DampedHarmonicOscillatorPhysical,
} from "@sketch/harmonicOscillator/";

const DampedHarmonicOscillator = () => {
  return (
    <Layout>
      <Helmet>
        <title>Test</title>
      </Helmet>
      <h1>Damped Harmonic Oscillator</h1>
      <p>The equation for the damped harmonic oscillator.</p>
      <TeX math="m \dfrac{d^2x}{dt^2} + b \dfrac{dx}{dt} + kx = 0" block />
      <DampedHarmonicOscillatorPhysical />
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

export default DampedHarmonicOscillator