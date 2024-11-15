'use client';

import { Slider } from '@/components/ui/Slider';

import { useHandleSlider } from '../hooks/useHandleSlider';

export const GeneratePasswordFormSlider = () => {
  const { sliderPercent, debouncedHandleChangeSlider } = useHandleSlider();
  return (
    <div>
      <div className="flex justify-between mb-4 ">
        <span>Password Length</span>
        <span>{sliderPercent[0]}</span>
      </div>
      <Slider
        defaultValue={[8]}
        max={100}
        step={1}
        onValueChange={debouncedHandleChangeSlider}
      />
    </div>
  );
};
