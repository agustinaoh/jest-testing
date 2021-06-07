import { EvenOrOdd } from './even-or-odd';

describe('Even or Odd', () => {

    let evenOrOdd;
    beforeEach(() => {
      evenOrOdd = new EvenOrOdd();
    })

    it('should tell if 14 is even', () => {
        const result = evenOrOdd.testNumber(14);
        expect(result).toEqual('Es par');
    })

    it('should tell if 7 is odd', () => {
        const result = evenOrOdd.testNumber(7);
        expect(result).toEqual('Es impar');
    })
})
