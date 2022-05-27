import React, { ComponentType, useCallback, useMemo, useState } from "react";
import { Slider } from "./Slider";

type InteractiveProps<T> = {
  Component: ComponentType<T>;
  componentProps: T;
};

export const Interactive = function <T>({
  Component,
  componentProps,
}: InteractiveProps<T>) {
  const [sliderProps, setSliderProps] = useState(componentProps);
  const [internalComponentProps, setInternalComponentProps] =
    useState(sliderProps);
  const internalComponent = useMemo(
    () => <Component key={Date.now()} {...internalComponentProps} />,
    [internalComponentProps]
  );
  const [liveReload, setLiveReload] = useState(false);

  const sliders = [];
  for (const [key, value] of Object.entries(sliderProps)) {
    sliders.push(
      <Slider
        value={value}
        onChange={(num: number) => {
          if (liveReload) {
            setInternalComponentProps({
              ...internalComponentProps,
              [key]: num,
            });
          }
          setSliderProps({
            ...sliderProps,
            [key]: num,
          });
        }}
        label={key}
        key={`slider-${key}`}
      />
    );
  }

  return (
    <div>
      {sliders}
      {!liveReload && (
        <button
          onClick={() =>
            setInternalComponentProps({ ...internalComponentProps })
          }
        >
          Replay
        </button>
      )}
      <input
        type="checkbox"
        checked={liveReload}
        onClick={() => setLiveReload(!liveReload)}
        name="liveReload"
      />
      <label htmlFor="liveReload">Live Reload</label>
      {internalComponent}
    </div>
  );
};
