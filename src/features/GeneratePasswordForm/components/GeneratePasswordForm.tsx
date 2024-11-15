import { cn } from '@/lib/cn';

import { GeneratePasswordFormSlider } from './GeneratePasswordFormSlider';
import { GeneratePasswordFormTitle } from './GeneratePasswordFormTitle';

export const GeneratePasswordForm = () => {
  const mainClasses = cn(
    'max-w-md p-8 space-y-6 bg-gray-900 rounded-xl shadow-lg border border-green-500 ',
  );
  return (
    <div className={mainClasses}>
      <GeneratePasswordFormTitle />
      <GeneratePasswordFormSlider />
    </div>
  );
};
