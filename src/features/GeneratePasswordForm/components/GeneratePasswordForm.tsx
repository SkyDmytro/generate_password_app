'use client';

import { cn } from '@/lib/cn';

import { GeneratePasswordFormCheckBox } from './GeneratePasswordFormCheckBox';
import { GeneratePasswordFormInput } from './GeneratePasswordFormInput';
import { GeneratePasswordFormPasswordStrengthIndicator } from './GeneratePasswordFormPasswordStrengthIndicator';
import { GeneratePasswordFormSlider } from './GeneratePasswordFormSlider';
import { GeneratePasswordFormTitle } from './GeneratePasswordFormTitle';

export const GeneratePasswordForm = () => {
  const mainClasses = cn(
    'max-w-md p-8 space-y-6 bg-gray-900 rounded-xl shadow-lg border border-green-500 ',
  );

  return (
    <div className={mainClasses}>
      <GeneratePasswordFormTitle />
      <GeneratePasswordFormInput />
      <GeneratePasswordFormSlider />
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
      <GeneratePasswordFormPasswordStrengthIndicator strength={3} />
    </div>
  );
};
