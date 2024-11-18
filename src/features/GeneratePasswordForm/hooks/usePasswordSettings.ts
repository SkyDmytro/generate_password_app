import { useState } from 'react';

export const usePasswordSettings = () => {
  const [rules, setRules] = useState({
    length: 8,
    includeNumbers: false,
    includeSymbols: false,
    includeUppercase: false,
  });

  const toggleRule = (rule: keyof typeof rules) => {
    setRules((prev) => ({ ...prev, [rule]: !prev[rule] }));
  };

  const setLength = (length: number[]) => {
    const lengthValue = length[0];
    setRules((prev) => ({ ...prev, length: lengthValue }));
  };

  return { rules, toggleRule, setLength };
};
