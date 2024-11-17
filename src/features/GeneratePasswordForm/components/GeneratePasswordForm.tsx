'use client';

import { cn } from '@/lib/cn';

import { useEffect, useMemo, useState } from 'react';

import { useHandleSlider } from '../hooks/useHandleSlider';
import { passwordRulesType } from '../types/types';
import { generatePassword } from '../utils/generatePassword';
import { getPasswordStrength } from '../utils/getPasswordStrength';
import { GeneratePasswordFormButton } from './GeneratePasswordFormButton';
import { GeneratePasswordFormCheckBox } from './GeneratePasswordFormCheckBox';
import { GeneratePasswordFormInput } from './GeneratePasswordFormInput';
import { GeneratePasswordFormPasswordStrengthIndicator } from './GeneratePasswordFormPasswordStrengthIndicator';
import { GeneratePasswordFormSlider } from './GeneratePasswordFormSlider';
import { GeneratePasswordFormTitle } from './GeneratePasswordFormTitle';

export const GeneratePasswordForm = () => {
  const [password, setPassword] = useState<string>('');
  const [passwordStrength, setPasswordStrength] = useState<number>(0);
  const { debouncedHandleChangeSlider, sliderPercent } = useHandleSlider();
  const [isNumbersChecked] = useState<boolean>(false);
  const [isSymbolsChecked] = useState<boolean>(false);
  const [isUppercaseChecked] = useState<boolean>(false);

  const passwordRules: passwordRulesType = useMemo(
    () => ({
      length: sliderPercent[0],
      includeNumbers: isNumbersChecked,
      includeSymbols: isSymbolsChecked,
      includeUppercase: isUppercaseChecked,
    }),
    [isNumbersChecked, isSymbolsChecked, isUppercaseChecked, sliderPercent],
  );
  const handleReGeneratePassword = () => {
    setPassword(generatePassword(passwordRules));
  };

  // On password rules change
  useEffect(() => {
    const newPassword = generatePassword(passwordRules);
    setPassword(newPassword);
  }, [passwordRules]);

  useEffect(() => {
    const passwordStrength = getPasswordStrength(password);
    setPasswordStrength(passwordStrength);
  }, [password]);

  // On slider change
  useEffect(() => {
    passwordRules.length = sliderPercent[0];
  }, [passwordRules, sliderPercent]);

  return (
    <div
      className={cn(
        'max-w-md p-8 space-y-6 bg-gray-900 rounded-xl shadow-lg border border-green-500 ',
      )}
    >
      <GeneratePasswordFormTitle />
      <GeneratePasswordFormInput password={password} />
      <GeneratePasswordFormSlider
        length={sliderPercent[0]}
        onSliderChange={debouncedHandleChangeSlider}
      />
      <div className="flex flex-col gap-2">
        <GeneratePasswordFormCheckBox
          label="Include Uppercase Letters"
          handleCheckedChange={() => {
            console.log('1');
          }}
          isChecked={true}
        />
        <GeneratePasswordFormCheckBox
          label="Include Numbers"
          handleCheckedChange={() => {
            console.log('2');
          }}
          isChecked={false}
        />
        <GeneratePasswordFormCheckBox
          label="Include Symbols"
          handleCheckedChange={() => {
            console.log('3');
          }}
          isChecked={false}
        />
      </div>
      <GeneratePasswordFormPasswordStrengthIndicator
        strength={passwordStrength}
      />
      <GeneratePasswordFormButton onClick={handleReGeneratePassword} />
    </div>
  );
};
