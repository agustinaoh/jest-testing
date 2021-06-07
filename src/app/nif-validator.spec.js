import { NifValidator } from "./nif-validator";

describe('Validate NIF number', () => {

    let nifValidator;
    beforeEach(() => {
      nifValidator = new NifValidator();
    })

    it('should return error if number is too short', () => {
      const nif = "361526B";
      const result = nifValidator.validate(nif);
      expect(result).toEqual('Incorrect characters length') 
    })

    it('should return error if numbers or letter are invalid', () => {
      const nif = "36152620B";
      const result = nifValidator.validate(nif);
      expect(result).toEqual('Invalid numbers or letter. Please check again') 
    })

    it('should validate a correct NIF number', () => {
      const nif = "36152630B";
      const result = nifValidator.validate(nif);
      expect(result).toEqual('Valid NIF number! :)') 
    })
})