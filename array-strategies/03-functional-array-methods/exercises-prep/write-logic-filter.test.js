'use strict';

/**
 * returns true if a string is longer than 5 characters
 * otherwise returns false
 * @param {string} str - the string to check
 * @returns {boolean} is the string longer than 5?
 */
const longerThanFive = str => {
  return _;
};

describe('longerThanFive: determines if a string is longer than 5 characters', () => {
  describe('can be used on its own', () => {
    it('returns false for the empty string', () => {
      expect(longerThanFive('')).toStrictEqual(false);
    });
    it('returns false for a short string', () => {
      expect(longerThanFive('abc')).toStrictEqual(false);
    });
    it('returns false for strings of length 5', () => {
      expect(longerThanFive('abcde')).toStrictEqual(false);
    });
    it('returns true for strings of length 6', () => {
      expect(longerThanFive('abcdef')).toStrictEqual(true);
    });
    it('and for longer strings', () => {
      expect(longerThanFive('abcdefghijklmnopqrstuvwxyz')).toStrictEqual(true);
    });
  });
  describe('can be used as a callback for Array.filter', () => {
    it('finds nothing in an empty array', () => {
      const expected = [];
      const actual = [].filter(longerThanFive);
      expect(actual).toStrictEqual(expected);
    });
    it('keeps all items when all are over 5 long', () => {
      const expected = ['123456', 'abcdef'];
      const actual = ['123456', 'abcdef'].filter(longerThanFive);
      expect(actual).toStrictEqual(expected);
    });
    it('removes all items when all are under 5 long', () => {
      const expected = [];
      const actual = ['12345', 'abcde'].filter(longerThanFive);
      expect(actual).toStrictEqual(expected);
    });
    it('keeps only the correct items', () => {
      const expected = ['abcdef'];
      const actual = ['12345', 'abcdef'].filter(longerThanFive);
      expect(actual).toStrictEqual(expected);
    });
  });
});
