import { Copy } from 'lucide-react';

import { useClipboard } from '../hooks/useClipboard';

export const GeneratePasswordFormInput = ({
  password,
}: {
  password: string;
}) => {
  const { copyResult: copyResultMessage, copyToClipboard } = useClipboard();

  const handleCopy = () => {
    copyToClipboard(password);
  };

  return (
    <div className="rounded-md">
      <div className=" bg-black flex justify-between items-center p-2 border-green-500 rounded-md  border-[1px] ">
        <input
          value={password}
          type="text"
          disabled
          className="bg-black rounded-lg w-full"
        />
        <Copy
          size={20}
          onClick={handleCopy}
          className="cursor-pointer"
          aria-label="Copy to clipboard"
        />
      </div>
      <div className="mt-2">
        {copyResultMessage && <span>{copyResultMessage}</span>}
      </div>
    </div>
  );
};
