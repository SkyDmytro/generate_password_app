import { Button } from '@/components/ui/Button';

import { RefreshCcw } from 'lucide-react';

export const GeneratePasswordFormButton = ({
  onClick,
}: {
  onClick?: () => void;
}) => {
  return (
    <Button
      className="w-full bg-green-500 hover:bg-green-400 text-black font-bold p-4 rounded-lg"
      onClick={onClick}
    >
      Generate Password
      <RefreshCcw className="ml-2" />
    </Button>
  );
};
