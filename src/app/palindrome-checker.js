export class PalindromeChecker {

  checkString(str) {

    // lowercase
    // remove accents
    // remove special characters
    // remove spaces
    const removeFormat = (str) => {
      return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f,.!?:;'"/\s/]/g, "");
    };
  
    const unformattedText = removeFormat(str);
  
    // reverse
    const reversedText = unformattedText.split("").reverse().join("");
  
    //compare original and reversed
    const isPalindrome = (unformattedText === reversedText) ? "Es palíndromo" : "No es palíndromo"
    return isPalindrome;
  }
}
