import { debounce } from '@/utils/debounce';

import { useState } from 'react';

export const useHandleSlider = () => {
  const [sliderPercent, setSliderPercent] = useState([8, 100]);

  const handleChangeSlider = (value: number[]) => {
    setSliderPercent(value);
  };

  const debouncedHandleChangeSlider = debounce(handleChangeSlider, 200);

  return {
    sliderPercent,
    debouncedHandleChangeSlider,
  };
};
