'use strict';

/**
 * takes an array of strings and returns a new array
 *  the new array contains all the numbery strings, cast to number
 * does not modify the argument
 * @param {string[]} arr - the array of strings
 * @returns {number[]} an array containing numbers that aren't NaN
 */
const numberyNumberify = arr => {
  // these work, you need to use them with the right array methods
  const isNotNaN = entry => {
    return !Number.isNaN(entry);
  };
  const castToNumber = entry => {
    return Number(entry);
  };

  // fill in the array methods and which logic to use
  const allValidNumbers = arr._(_)._(_);

  return allValidNumbers;
};

describe('numberyNumberify: converts an array of strings into an array of numbery numbers', () => {
  describe('it correctly processes an array of strings', () => {
    it('returns an empty array for the empty array', () => {
      const expected = [];
      const actual = numberyNumberify([]);
      expect(actual).toEqual(expected);
    });
    it('maps all entries to Number', () => {
      const expected = [1, 2, 3];
      const actual = numberyNumberify(['1', '2', '3']);
      expect(actual).toEqual(expected);
    });
    it('filters all NaN values', () => {
      const expected = [1, 2, 3];
      const actual = numberyNumberify(['1', '$%@#', '2', 'e', '3']);
      expect(actual).toEqual(expected);
    });
  });
  describe('it uses the argument correctly', () => {
    it('does not modify the argument', () => {
      const arg = ['asdf', '1', ''];
      numberyNumberify(arg);
      expect(arg).toEqual(['asdf', '1', '']);
    });
  });
});
