export const defaultHarmonicOscillatorProps = {
  m: 2,
  b: 0.1,
  k: 10,
  x: 0,
  v: 150,
  t: 0,
  dt: 0.1,
  tMax: 30,
};

export type HarmonicOscillatorProps = Partial<
  typeof defaultHarmonicOscillatorProps
>;
