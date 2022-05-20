import React from "react";
import { Helmet } from "react-helmet";
import TeX from "@matejmazur/react-katex";
import Layout from "@components/layout/default";
import {
  DampedHarmonicOscillatorPhaseSpace,
  DampedHarmonicOscillatorPhysical,
  defaultHarmonicOscillatorProps,
} from "@sketch/harmonicOscillator/";
import { Interactive } from "src/pixel-physics-p5/components/Interactive";

const DampedHarmonicOscillator = () => {
  return (
    <Layout>
      <Helmet>
        <title>Damped Harmonic Oscillator</title>
      </Helmet>
      <h1>Damped Harmonic Oscillator</h1>
      <Interactive
        Component={DampedHarmonicOscillatorPhysical}
        componentProps={defaultHarmonicOscillatorProps}
      />
      <p>The equation for the damped harmonic oscillator.</p>
      <TeX math="m \dfrac{d^2x}{dt^2} + b \dfrac{dx}{dt} + kx = 0" block />
      <p>A phase space diagram for the damped harmonic oscillator</p>
      <TeX block>
        {String.raw`
            \begin{cases}\
              \dot{x} = v,\\
              \dot{v} = -\dfrac{b}{m}v -\dfrac{k}{m}x\
            \end{cases}
            `}
      </TeX>
      <Interactive
        Component={DampedHarmonicOscillatorPhaseSpace}
        componentProps={defaultHarmonicOscillatorProps}
      />
    </Layout>
  );
};

export default DampedHarmonicOscillator;
