// #todo

'use strict';

/**
 * removes all strings from an array
 * returns a new array without modifying the original
 * @param {Array} arr - the array of values to filter
 * @returns {Array} - a new array with no strings
 */
const filterOutStrings = (arr = []) => {
  const noStrings = [];
  for (const _ of _) {
  }

  return noStrings;
};

describe('filterOutStrings removes all "string" values from an array', () => {
  describe('it correctly filters the values in an array', () => {
    it('returns an empty array if an empty array is passed', () => {
      const expected = [];
      const actual = filterOutStrings([]);
      expect(actual).toEqual(expected);
    });
    it('returns an empty array if only strings are passed', () => {
      const expected = [];
      const actual = filterOutStrings(['1', '', '20', 'asdf', 'Infinity']);
      expect(actual).toEqual(expected);
    });
    it('keeps all values that are not strings', () => {
      const expected = [false, null, undefined, 100, NaN];
      const actual = filterOutStrings([false, null, undefined, 100, NaN]);
      expect(actual).toEqual(expected);
    });
    it('can handle arrays with mixed types', () => {
      const expected = [1, true, null, undefined];
      const actual = filterOutStrings([1, 'a', true, null, 'b', undefined]);
      expect(actual).toEqual(expected);
    });
  });
  describe('it uses the argument array correctly', () => {
    it('returns a new array', () => {
      const arg = [];
      const returned = filterOutStrings([]);
      const areNotTheSameArray = arg !== returned;
      expect(areNotTheSameArray).toEqual(true);
    });
    it('does not modify the argument', () => {
      const arg = ['a', 1, true, null, undefined];
      filterOutStrings(arg);
      expect(arg).toEqual(['a', 1, true, null, undefined]);
    });
  });
});
