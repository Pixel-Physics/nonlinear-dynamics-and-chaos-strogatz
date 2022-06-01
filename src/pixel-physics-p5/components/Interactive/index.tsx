import React, { ComponentType, useCallback, useMemo, useState } from "react";
import { Slider } from "./Slider";

type InteractiveProps<T> = {
  Component: ComponentType<T>;
  componentProps: T;
};

/**
 * TODO: 
 * Add inputs for min, step, max, and value.
 * Style the sliders.
 */
export const Interactive = function <T>({
  Component,
  componentProps,
}: InteractiveProps<T>) {
  // Settings
  const [liveReload, setLiveReload] = useState(false);

  // Sliders
  const [sliderProps, setSliderProps] = useState(componentProps);
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

  // Component
  const [internalComponentProps, setInternalComponentProps] =
    useState(sliderProps);
  const internalComponent = useMemo(
    () => <Component key={Date.now()} {...internalComponentProps} />,
    [internalComponentProps]
  );

  return (
    <div>
      <div className="interactive-settings">
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
      </div>
      <div className="interactive-sliders">{sliders}</div>
      {internalComponent}
    </div>
  );
};
