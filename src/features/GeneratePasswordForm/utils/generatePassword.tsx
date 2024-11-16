import { passwordRulesType } from '../types/types';

const charSets = {
  uppercaseLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercaseLetters: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-=',
};

export const getPassword = (passwordRules: passwordRulesType) => {
  const { includeNumbers, includeSymbols, includeUppercase, length } =
    passwordRules;

  const { charset, requiredChars } = buildCharsetAndRequiredChars({
    includeNumbers,
    includeSymbols,
    includeUppercase,
  });

  const randomChars = getRandomChars(length - requiredChars.length, charset);

  return shuffleString(requiredChars + randomChars);
};

const getRandomChar = (charset: string) => {
  return charset.charAt(Math.floor(Math.random() * charset.length));
};
const getRandomChars = (length: number, charset: string) => {
  return Array.from({ length }, () => getRandomChar(charset)).join('');
};
const shuffleString = (str: string) => {
  return str
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

const buildCharsetAndRequiredChars = ({
  includeNumbers,
  includeSymbols,
  includeUppercase,
}: Omit<passwordRulesType, 'length'>) => {
  let charset = charSets.lowercaseLetters;
  let requiredChars = '';
  if (includeUppercase) {
    charset += charSets.uppercaseLetters;
    requiredChars += getRandomChar(charSets.uppercaseLetters);
  }
  if (includeNumbers) {
    charset += charSets.numbers;
    requiredChars += getRandomChar(charSets.numbers);
  }
  if (includeSymbols) {
    charset += charSets.symbols;
    requiredChars += getRandomChar(charSets.symbols);
  }
  return { charset, requiredChars };
};
