'use client';

import { useState } from 'react';

import { Copy } from 'lucide-react';

import { useClipboard } from '../hooks/useClipboard';

export const GeneratePasswordFormInput = () => {
  const { copyResult: copyResultMessage, copyToClipboard } = useClipboard();
  const [inputValue] = useState<string>('dsadsa');

  const handleCopy = () => {
    copyToClipboard(inputValue);
  };

  return (
    <div className="rounded-md">
      <div className=" bg-black flex justify-between items-center p-2 border-green-500 rounded-md  border-[1px] ">
        <input
          value={inputValue}
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
