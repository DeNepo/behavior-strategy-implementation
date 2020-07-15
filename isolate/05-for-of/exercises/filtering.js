'use strict';

const assert = chai.assert;

/**
 * removes all strings from an array
 * returns a new array without modifying the original
 * @param {Array} arr - the array of values to filter
 * @returns {Array} - a new array with no strings
 */
const filterOutStrings = (arr) => {
  if (!Array.isArray(arr)) { throw new TypeError('arr'); }

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
      assert.deepStrictEqual(actual, expected);
    });
    it('returns an empty array if only strings are passed', () => {
      const expected = [];
      const actual = filterOutStrings(['1', '', '20', 'asdf', 'Infinity']);
      assert.deepStrictEqual(actual, expected);
    });
    it('keeps all values that are not strings', () => {
      const expected = [false, null, undefined, 100, NaN];
      const actual = filterOutStrings([false, null, undefined, 100, NaN]);
      assert.deepStrictEqual(actual, expected);
    });
    it('can handle arrays with mixed types', () => {
      const expected = [1, true, null, undefined];
      const actual = filterOutStrings([1, 'a', true, null, 'b', undefined]);
      assert.deepStrictEqual(actual, expected);
    });
  });
  describe('it uses the argument array correctly', () => {
    it('returns a new array', () => {
      const arg = [];
      const returned = filterOutStrings([]);
      assert.notStrictEqual(returned, arg);
    });
    it('does not modify the argument', () => {
      const arg = ['a', 1, true, null, undefined];
      filterOutStrings(arg);
      assert.deepStrictEqual(arg, ['a', 1, true, null, undefined]);
    });
    it('throws a TypeError if the argument is not an array', () => {
      const shouldThrow = () => filterOutStrings(14);
      assert.throws(shouldThrow, TypeError, 'arr');
    });
  });
});









