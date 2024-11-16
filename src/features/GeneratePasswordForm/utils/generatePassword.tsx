import { passwordRulesType } from '../types/types';

export const getPassword = (passwordRules: passwordRulesType) => {
  const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz';
  const NUMBERS = '0123456789';
  const SYMBOLS = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

  let rulesCount = 0;
  let charset = LOWERCASE_LETTERS;
  let password = '';

  if (passwordRules.includeUppercase) {
    charset += UPPERCASE_LETTERS;
    password += getRandomChar(UPPERCASE_LETTERS);
    rulesCount += 1;
  }

  if (passwordRules.includeNumbers) {
    charset += NUMBERS;
    password += getRandomChar(NUMBERS);
    rulesCount += 1;
  }

  if (passwordRules.includeSymbols) {
    charset += SYMBOLS;
    password += getRandomChar(SYMBOLS);
    rulesCount += 1;
  }
  for (let i = 0; i < passwordRules.length - rulesCount; i++) {
    password += getRandomChar(charset);
  }
  return shuffleString(password);
};

const getRandomChar = (charset: string) => {
  return charset.charAt(Math.floor(Math.random() * charset.length));
};
const shuffleString = (str: string) => {
  return str
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};
