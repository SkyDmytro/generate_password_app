import { copyTextToClipboard } from '@/features/GeneratePasswordForm/utils/clipboardutils';

import { useCallback, useState } from 'react';

export const useClipboard = () => {
  const [copyResult, setCopyResult] = useState<null | string>(null);

  const copyToClipboard = useCallback(async (text: string) => {
    const result = await copyTextToClipboard(text);
    setCopyResult(result);

    setTimeout(() => {
      setCopyResult(null);
    }, 2000);
  }, []);

  return { copyResult, copyToClipboard };
};
