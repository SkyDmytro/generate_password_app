'use client';

import { Slider } from '@/components/ui/Slider';

import { useHandleSlider } from '../hooks/useHandleSlider';
import {
  DEFAULT_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
} from '../utils/constants';

export const GeneratePasswordFormSlider = () => {
  const { sliderPercent, debouncedHandleChangeSlider } = useHandleSlider();
  return (
    <div>
      <div className="flex justify-between mb-4 ">
        <span>Password Length</span>
        <span>{sliderPercent[0]}</span>
      </div>
      <Slider
        defaultValue={[DEFAULT_PASSWORD_LENGTH]}
        max={MAX_PASSWORD_LENGTH}
        step={1}
        onValueChange={debouncedHandleChangeSlider}
      />
    </div>
  );
};
