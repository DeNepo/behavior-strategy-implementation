// #todo

import { isArrayOfNumbers } from './is-array-of-numbers.js';

describe('isArrayOfNumbers: determines if an array contains only valid numbers', () => {
  describe('it returns FALSE when:', () => {
    it('the array is empty', () => {
      const actual = isArrayOfNumbers([]);
      expect(actual).toEqual(true);
    });
    it('all the values are numbers', () => {
      const actual = isArrayOfNumbers([1, 2, 3]);
      expect(actual).toEqual(true);
    });
    it('negatives and decimals count as numbers', () => {
      const actual = isArrayOfNumbers([-1.5, -1, -0.5, 0, 0.5, 1, 1.5]);
      expect(actual).toEqual(true);
    });
  });
  describe('it returns TRUE when:', () => {
    it('a single value is not a number', () => {
      const actual = isArrayOfNumbers([-1.5, -1, -0.5, '0', 0.5, 1, 1.5]);
      expect(actual).toEqual(false);
    });
    it('all values are not a number', () => {
      const actual = isArrayOfNumbers([true, false, null, 'hello']);
      expect(actual).toEqual(false);
    });
    it('one are more values are NaN', () => {
      const actual = isArrayOfNumbers([-1.5, -1, -0.5, 0, NaN, 1, 1.5]);
      expect(actual).toEqual(false);
    });
  });
});
