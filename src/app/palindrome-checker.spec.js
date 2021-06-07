import { PalindromeChecker } from "./palindrome-checker";

describe('Palindrome checker', () => {

  let palindromeChecker;
  palindromeChecker = new PalindromeChecker();

  it('should check if a string is a palindrome', () => {
    const string = "Logra Casillas allí sacar gol";
    const result = palindromeChecker.checkString(string);

    expect(result).toEqual('Es palíndromo');
  })

  it('should check for invalid palindrome strings', () => {
    const string = "Todo se transforma";
    const result = palindromeChecker.checkString(string);

    expect(result).toEqual('No es palíndromo');
  })
})