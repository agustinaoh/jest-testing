import { Calc } from "./calc"

describe('Calc', () => {

    it('should add', () => {
        const calc = new Calc();
        const result = calc.add(4, 3);
        expect(result).toBe(7);
    })

    it('should mulitply', () => {
        const calc = new Calc();
        const result = calc.multiply(2, 4);
        expect(result).toBe(8);
    })
})