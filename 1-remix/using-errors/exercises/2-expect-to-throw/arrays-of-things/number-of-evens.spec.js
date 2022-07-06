// #todo

import { numberOfEvens } from './number-of-evens.js';

describe('numberOfEvens: returns the number of even numbers in an array of numbers', () => {
  describe('when the array is not empty, it returns a number', () => {
    it('works when all numbers are even', () => {
      const actual = numberOfEvens([4, 4, 4, 4, 4]);
      expect(actual).toEqual(5);
    });
    it('works no numbers are even', () => {
      const actual = numberOfEvens([1, 3, 5, 7]);
      expect(actual).toEqual(0);
    });
    it('works when there are even and odd numbers', () => {
      const actual = numberOfEvens([5, 3, 2, 4, 1]);
      expect(actual).toEqual(2);
    });
  });
  describe('when the array is empty, it returns 0', () => {
    it('returns 0 for an empty array', () => {
      const actual = numberOfEvens([]);
      expect(actual).toEqual(0);
    });
  });
  describe('when the array is invalid, it throws an error', () => {
    it('does not accept arrays containing not-numbers', () => {
      expect(() => {
        numberOfEvens([1, 2, '3', 4]);
      }).toThrow(TypeError);
    });
    it('does not accept arrays containing NaN', () => {
      expect(() => {
        numberOfEvens([1, NaN, 3, 4]);
      }).toThrow(TypeError);
    });
  });
});
