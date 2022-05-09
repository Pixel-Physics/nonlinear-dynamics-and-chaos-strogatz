import React, { ComponentType, useState } from "react";
import { Slider } from "./Slider";

type InteractiveProps<T> = {
  Component: ComponentType<T>;
  componentProps: T;
};

export const Interactive = function <T>({
  Component,
  componentProps,
}: InteractiveProps<T>) {
  const [internalProps, setInternalProps] = useState(componentProps);
  console.log(internalProps);
  const sliders = [];
  for (const [key, value] of Object.entries(internalProps)) {
    sliders.push(
      <Slider
        value={value}
        onChange={(num: number) => {
          console.log(`key: ${key}, value: ${num}`);
          setInternalProps({
            ...internalProps,
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
      <Component key={Date.now()} {...internalProps} />
    </div>
  );
};
