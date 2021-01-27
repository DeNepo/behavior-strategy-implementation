'use strict';

/**
 * casts all values to a string and concatenates
 * returns a new array without modifying the original
 * @param {Array} arr - the array of values to filter
 * @returns {Array} - a new array with no strings
 */
const concatenateAsStrings = (arr = []) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('arr is not an array');
  }

  let concatenated = _;
  for (const _ of _) {
  }

  return concatenated;
};

describe('concatenateAsStrings casts values to "string" and joins them together', () => {
  describe('it correctly concatenates the values in an array', () => {
    it('returns an empty string if an empty array is passed', () => {
      const expected = '';
      const actual = concatenateAsStrings([]);
      expect(actual).toStrictEqual(expected);
    });
    it('concatenates strings', () => {
      const expected = '1asdf';
      const actual = concatenateAsStrings(['1', '', 'asdf']);
      expect(actual).toStrictEqual(expected);
    });
    it('concatenates numbers', () => {
      const expected = '12-30NaN';
      const actual = concatenateAsStrings([12, -3, 0.0, NaN]);
      expect(actual).toStrictEqual(expected);
    });
    it('can handle arrays with mixed types and no strings', () => {
      const expected = '12truenullundefined';
      const actual = concatenateAsStrings([1, 2, true, null, undefined]);
      expect(actual).toStrictEqual(expected);
    });
    it('can handle arrays with all primitive types', () => {
      const expected = `12AAtruenullBBundefined`;
      const actual = concatenateAsStrings([
        1,
        2,
        'AA',
        true,
        null,
        'BB',
        undefined,
      ]);
      expect(actual).toStrictEqual(expected);
    });
  });
  describe('it uses the argument array correctly', () => {
    it('does not modify the argument', () => {
      const arg = ['a', 1, true, null, undefined];
      concatenateAsStrings(arg);
      expect(arg).toStrictEqual(['a', 1, true, null, undefined]);
    });
    it('throws a TypeError if the argument is not an array', () => {
      const shouldThrow = () => concatenateAsStrings(14);
      expect(shouldThrow).toThrow();
    });
  });
});
