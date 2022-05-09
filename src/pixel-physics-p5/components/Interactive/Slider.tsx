import React, { useState } from "react";
import { css } from "@emotion/react";

const styles = {
  container: css({
    width: "100%",
    display: "flex",
  }),
  label: css({
    minWidth: "5em",
  }),
  slider: css({
    WebkitAppearance: "none",
    appearance: "none",
    width: "100%",
    height: 25,
    background: "#d3d3d3",
    outline: "none",
    opacity: 0.7,
    WebkitTransition: ".2s",
    transition: "opacity .2s",
    "&:hover": {
      opacity: 1,
    },
  }),
};

type SliderProps = {
  value: number;
  onChange: (value: number) => void;
  label?: string;
};

export const Slider = ({
  value,
  onChange,
  label,
}: SliderProps) => {
  return (
    <div css={styles.container}>
      <div css={styles.label}>{label}:</div>
      <input
        type="range"
        css={styles.slider}
        min="1"
        max="100"
        value={value}
        onChange={(e) => onChange(Number.parseFloat(e.target.value))}
        id="myRange"
      />
    </div>
  );
};
