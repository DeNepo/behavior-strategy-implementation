// #todo

import { findSmallestNumber } from './find-smallest-number.js';

describe('findSmallestNumber: returns the smallest number in an array of numbers', () => {
  describe('when the array is not empty, it returns a number', () => {
    it('works when there is many of the same number', () => {
      const actual = findSmallestNumber([4, 4, 4, 4]);
      expect(actual).toEqual(4);
    });
    it('works when the numbers are in order', () => {
      const actual = findSmallestNumber([1, 2, 3, 4]);
      expect(actual).toEqual(1);
    });
    it('works when the numbers are not in order', () => {
      const actual = findSmallestNumber([5, 3, 1, 4, 2]);
      expect(actual).toEqual(1);
    });
  });
  describe('when the array is empty, it returns undefined', () => {
    it('returns undefined for an empty array', () => {
      const actual = findSmallestNumber([]);
      expect(actual).toEqual(undefined);
    });
  });
  describe('when the array is invalid, it throws an error', () => {
    it('does not accept arrays containing not-numbers', () => {
      expect(() => {
        findSmallestNumber([1, 2, '3', 4]);
      }).toThrow(TypeError);
    });
    it('does not accept arrays containing NaN', () => {
      expect(() => {
        findSmallestNumber([1, NaN, 3, 4]);
      }).toThrow(TypeError);
    });
  });
});
