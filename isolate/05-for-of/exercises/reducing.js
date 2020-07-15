'use strict';

const assert = chai.assert;

/**
 * casts all values to a string and concatenates
 * returns a new array without modifying the original
 * @param {Array} arr - the array of values to filter
 * @returns {Array} - a new array with no strings
 */
const concatenateAsStrings = (arr) => {
  if (!Array.isArray(arr)) { throw new TypeError('arr'); }

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
      assert.deepStrictEqual(actual, expected);
    });
    it('concatenates strings', () => {
      const expected = '1asdf';
      const actual = concatenateAsStrings(['1', '', 'asdf']);
      assert.deepStrictEqual(actual, expected);
    });
    it('concatenates numbers', () => {
      const expected = '12-30NaN';
      const actual = concatenateAsStrings([12, -3, 0.0, NaN]);
      assert.deepStrictEqual(actual, expected);
    });
    it('can handle arrays with mixed types and no strings', () => {
      const expected = '12truenullundefined';
      const actual = concatenateAsStrings([1, 2, true, null, undefined]);
      assert.deepStrictEqual(actual, expected);
    });
    it('can handle arrays with all primitive types', () => {
      const expected = `12AAtruenullBBundefined`;
      const actual = concatenateAsStrings([1, 2, 'AA', true, null, 'BB', undefined]);
      assert.deepStrictEqual(actual, expected);
    });
  });
  describe('it uses the argument array correctly', () => {
    it('does not modify the argument', () => {
      const arg = ['a', 1, true, null, undefined];
      concatenateAsStrings(arg);
      assert.deepStrictEqual(arg, ['a', 1, true, null, undefined]);
    });
    it('throws a TypeError if the argument is not an array', () => {
      const shouldThrow = () => concatenateAsStrings(14);
      assert.throws(shouldThrow, TypeError, 'arr');
    });
  });
});









