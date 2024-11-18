export const copyTextToClipboard = async (text: string): Promise<string> => {
  try {
    await navigator.clipboard.writeText(text);
    return 'Copied!';
  } catch (error) {
    console.error('Failed to copy text:', error);
    return 'Failed to copy';
  }
};
