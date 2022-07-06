// #todo

import { sumNumbers } from './sum-numbers.js';

describe('sumNumbers: sums all the numbers in an array of numbers', () => {
  describe('when the array is not empty, it returns an number', () => {
    it('works when there is many of the same number', () => {
      const actual = sumNumbers([4, 4, 4, 4]);
      expect(actual).toEqual(16);
    });
    it('works there are different numbers', () => {
      const actual = sumNumbers([1, 2, 3, 4]);
      expect(actual).toEqual(10);
    });
    it('works with decimal numbers', () => {
      const actual = sumNumbers([1, 2.5, 3.5, 4.5]);
      expect(actual).toEqual(11.5);
    });
  });
  describe('when the array is empty, it returns 0', () => {
    it('returns 0 for an empty array', () => {
      const actual = sumNumbers([]);
      expect(actual).toEqual(0);
    });
  });
  describe('when the array is invalid, it throws an error', () => {
    it('does not accept arrays containing not-numbers', () => {
      expect(() => {
        sumNumbers([1, 2, '3', 4]);
      }).toThrow(TypeError);
    });
    it('does not accept arrays containing NaN', () => {
      expect(() => {
        sumNumbers([1, NaN, 3, 4]);
      }).toThrow(TypeError);
    });
  });
});
