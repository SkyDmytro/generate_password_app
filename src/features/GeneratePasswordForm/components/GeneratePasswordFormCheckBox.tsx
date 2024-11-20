'use client';

import { Checkbox } from '@/components/ui/checkbox';

import { ReactNode } from 'react';

interface GeneratePasswordFormCheckBoxProps {
  isChecked: boolean;
  handleCheckedChange: (ischecked: boolean) => void;
  label: string;
  id: string;
}
export const GeneratePasswordFormCheckBox = ({
  handleCheckedChange,
  isChecked,
  id = 'condition',
  label,
}: GeneratePasswordFormCheckBoxProps): ReactNode => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        onCheckedChange={handleCheckedChange}
        className="border-green-500 text-green-500 focus:ring-green-500"
        checked={isChecked}
      />
      <label htmlFor={id} className="text-sm text-green-400">
        {label}
      </label>
    </div>
  );
};
