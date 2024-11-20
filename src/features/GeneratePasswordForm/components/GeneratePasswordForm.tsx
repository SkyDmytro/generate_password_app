'use client';

import { useEffect, useState } from 'react';

import { useHandleSlider } from '../hooks/useHandleSlider';
import { usePasswordSettings } from '../hooks/usePasswordSettings';
import { generatePassword } from '../utils/generatePassword';
import { getPasswordStrength } from '../utils/getPasswordStrength';
import { GeneratePasswordFormButton } from './GeneratePasswordFormButton';
import { GeneratePasswordFormCheckBox } from './GeneratePasswordFormCheckBox';
import { GeneratePasswordFormInput } from './GeneratePasswordFormInput';
import { GeneratePasswordFormPasswordStrengthIndicator } from './GeneratePasswordFormPasswordStrengthIndicator';
import { GeneratePasswordFormSlider } from './GeneratePasswordFormSlider';
import { GeneratePasswordFormTitle } from './GeneratePasswordFormTitle';

export const GeneratePasswordForm = () => {
  const { rules, toggleRule, setLength } = usePasswordSettings();
  const { debouncedHandleChangeSlider, sliderPercent } = useHandleSlider();
  const [password, setPassword] = useState<string>('');
  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const regeneratePassword = () => {
    setPassword(generatePassword(rules));
  };

  useEffect(() => {
    setLength(sliderPercent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderPercent]);

  useEffect(() => {
    setPassword(generatePassword(rules));
  }, [rules]);

  useEffect(() => {
    setPasswordStrength(getPasswordStrength(password));
  }, [password]);

  return (
    <div className="max-w-md p-8 space-y-6 bg-gray-900 rounded-xl shadow-lg border border-green-500">
      <GeneratePasswordFormTitle />
      <GeneratePasswordFormInput password={password} />
      <GeneratePasswordFormSlider
        length={rules.length}
        onSliderChange={debouncedHandleChangeSlider}
      />
      <div className="flex flex-col gap-2">
        <GeneratePasswordFormCheckBox
          id="uppercase"
          label="Include Uppercase Letters"
          handleCheckedChange={() => toggleRule('includeUppercase')}
          isChecked={rules.includeUppercase}
        />
        <GeneratePasswordFormCheckBox
          id="numbers"
          label="Include Numbers"
          handleCheckedChange={() => toggleRule('includeNumbers')}
          isChecked={rules.includeNumbers}
        />
        <GeneratePasswordFormCheckBox
          id="symbols"
          label="Include Symbols"
          handleCheckedChange={() => toggleRule('includeSymbols')}
          isChecked={rules.includeSymbols}
        />
      </div>
      <GeneratePasswordFormPasswordStrengthIndicator
        strength={passwordStrength}
      />
      <GeneratePasswordFormButton onClick={regeneratePassword} />
    </div>
  );
};
