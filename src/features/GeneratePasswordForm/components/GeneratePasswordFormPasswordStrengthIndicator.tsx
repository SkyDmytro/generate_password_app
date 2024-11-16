import { cn } from '@/lib/cn';

export const GeneratePasswordFormPasswordStrengthIndicator = ({
  strength,
}: {
  strength: number;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-green-400">Password Strength</span>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={cn(
            'h-full',
            strength < 2
              ? 'bg-red-500'
              : strength < 4
                ? 'bg-yellow-500'
                : 'bg-green-500',
          )}
          style={{ width: `${(strength / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};
