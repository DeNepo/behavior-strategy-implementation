// #todo

import { findGreatestNumber } from './find-greatest-number.js';

describe('findGreatestNumber: returns the greatest number in an array of numbers', () => {
  describe('when the array is not empty, it returns a number', () => {
    it('works when there is many of the same number', () => {
      const actual = findGreatestNumber([4, 4, 4, 4]);
      expect(actual).toEqual(4);
    });
    it('works when the numbers are in order', () => {
      const actual = findGreatestNumber([1, 2, 3, 4]);
      expect(actual).toEqual(4);
    });
    it('works when the numbers are not in order', () => {
      const actual = findGreatestNumber([5, 3, 2, 4, 1]);
      expect(actual).toEqual(5);
    });
  });
  describe('when the array is empty, it returns undefined', () => {
    it('returns undefined for an empty array', () => {
      const actual = findGreatestNumber([]);
      expect(actual).toEqual(undefined);
    });
  });
  describe('when the array is invalid, it throws an error', () => {
    it('does not accept arrays containing not-numbers', () => {
      expect(() => {
        findGreatestNumber([1, 2, '3', 4]);
      }).toThrow(TypeError);
    });
    it('does not accept arrays containing NaN', () => {
      expect(() => {
        findGreatestNumber([1, NaN, 3, 4]);
      }).toThrow(TypeError);
    });
  });
});
