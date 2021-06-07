export class NifValidator {
  
  validate(nif) {

    // check length
    if (nif.length !== 9) {
      return "Incorrect characters length";
    }
  
    if (nif.length === 9) {
      // define numbers
      let numbers = nif.slice(0, 8);
  
      // define remainder
      let remainder = numbers % 23;
  
      // check if remainder is valid
      function validRemainder(num) {
        return num >= 0 && num <= 22;
      }
  
      // check if remainder matches the nie letter
      function findLetter(remainder) {
        const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
        const nifLetter = letters[remainder];
        return nifLetter === nif.slice(-1);
      }
  
      if (validRemainder(remainder)) {
        if (findLetter(remainder)) {
          return "Valid NIF number! :)";
        } else {
          return "Invalid numbers or letter. Please check again";
        }
      }
    }
  }

}