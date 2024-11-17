import { Slider } from '@/components/ui/Slider';

import {
  DEFAULT_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
} from '../utils/constants';

export const GeneratePasswordFormSlider = ({
  length,
  onSliderChange,
}: {
  length: number;
  onSliderChange: (value: number[]) => void;
}) => {
  return (
    <div>
      <div className="flex justify-between mb-4 ">
        <span>Password Length</span>
        <span>{length}</span>
      </div>
      <Slider
        defaultValue={[DEFAULT_PASSWORD_LENGTH]}
        max={MAX_PASSWORD_LENGTH}
        step={1}
        onValueChange={onSliderChange}
      />
    </div>
  );
};
