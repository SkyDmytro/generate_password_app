import { describe, expect, test } from '@jest/globals';

import { passwordRulesType } from '../types/types';
import { getPassword as generatePassword } from '../utils/generatePassword';

const hasUppercase = (str: string) => /[A-Z]/.test(str);
const hasNumbers = (str: string) => /[0-9]/.test(str);
const hasSymbols = (str: string) => /[!@#$%^&*(),.?":{}|<>]/.test(str);

describe('generatePassword', () => {
  test('should generate a password of the correct length', () => {
    const rules: passwordRulesType = {
      length: 10,
      includeUppercase: false,
      includeNumbers: false,
      includeSymbols: false,
    };
    const password = generatePassword(rules);
    expect(password).toHaveLength(10);
  });

  test('should include uppercase letters if includeUppercase = true', () => {
    const rules: passwordRulesType = {
      length: 10,
      includeUppercase: true,
      includeNumbers: false,
      includeSymbols: false,
    };
    const password = generatePassword(rules);
    expect(hasUppercase(password)).toBe(true);
  });

  test('should not include uppercase letters if includeUppercase = false', () => {
    const rules: passwordRulesType = {
      length: 10,
      includeUppercase: false,
      includeNumbers: false,
      includeSymbols: false,
    };
    const password = generatePassword(rules);
    expect(hasUppercase(password)).toBe(false);
  });

  test('should include numbers if includeNumbers = true', () => {
    const rules: passwordRulesType = {
      length: 10,
      includeUppercase: false,
      includeNumbers: true,
      includeSymbols: false,
    };
    const password = generatePassword(rules);
    expect(hasNumbers(password)).toBe(true);
  });

  test('should not include numbers if includeNumbers = false', () => {
    const rules: passwordRulesType = {
      length: 10,
      includeUppercase: false,
      includeNumbers: false,
      includeSymbols: false,
    };
    const password = generatePassword(rules);
    expect(hasNumbers(password)).toBe(false);
  });

  test('should include symbols if includeSymbols = true', () => {
    const rules: passwordRulesType = {
      length: 10,
      includeUppercase: false,
      includeNumbers: false,
      includeSymbols: true,
    };
    const password = generatePassword(rules);
    expect(hasSymbols(password)).toBe(true);
  });

  test('should not include symbols if includeSymbols = false', () => {
    const rules: passwordRulesType = {
      length: 10,
      includeUppercase: false,
      includeNumbers: false,
      includeSymbols: false,
    };
    const password = generatePassword(rules);
    expect(hasSymbols(password)).toBe(false);
  });

  test('should correctly combine all included parameters', () => {
    const rules: passwordRulesType = {
      length: 15,
      includeUppercase: true,
      includeNumbers: true,
      includeSymbols: true,
    };
    const password = generatePassword(rules);
    expect(password).toHaveLength(15);
    expect(hasUppercase(password)).toBe(true);
    expect(hasNumbers(password)).toBe(true);
    expect(hasSymbols(password)).toBe(true);
  });

  test('should generate an alphabetical password without special characters and numbers', () => {
    const rules: passwordRulesType = {
      length: 8,
      includeUppercase: false,
      includeNumbers: false,
      includeSymbols: false,
    };
    const password = generatePassword(rules);
    expect(password).toMatch(/^[a-z]+$/);
  });
});
