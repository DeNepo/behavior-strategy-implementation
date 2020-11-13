'use strict';

const assert = chai.assert;

/**
 * casts each item in an array to Number
 * returns a new array without modifying the original
 * @param {Array} arr - the array of items to coerce
 * @returns {Array} - a new array of number values
 */
const mapToNumber = (arr) => {
  if (!Array.isArray(arr)) { throw new TypeError('arr'); }

  const numberValues = [];
  for (const _ of _) {

  }

  return numberValues;
};


describe('mapToNumber casts each element in an array to type "number"', () => {
  describe('it correctly converts the values in an array', () => {
    it('returns an empty array if an empty array is passed', () => {
      const expected = [];
      const actual = mapToNumber([]);
      assert.deepStrictEqual(actual, expected);
    });
    it('converts strings to Number', () => {
      const expected = [1, 0, 20, NaN, Infinity];
      const actual = mapToNumber(['1', '', '20', 'asdf', 'Infinity']);
      assert.deepStrictEqual(actual, expected);
    });
    it('converts booleans to Number', () => {
      const expected = [1, 0];
      const actual = mapToNumber([true, false]);
      assert.deepStrictEqual(actual, expected);
    });
    it('converts null and undefined to Number', () => {
      const expected = [0, NaN];
      const actual = mapToNumber([null, undefined]);
      assert.deepStrictEqual(actual, expected);
    });
    it('converts numbers to Number', () => {
      const expected = [14, -14, 0, NaN, Infinity];
      const actual = mapToNumber([14, -14, 0, NaN, Infinity]);
      assert.deepStrictEqual(actual, expected);
    });
    it('converts mixed type arrays to Number', () => {
      const expected = [NaN, 1, 1, 0, NaN];
      const actual = mapToNumber(['a', 1, true, null, undefined]);
      assert.deepStrictEqual(actual, expected);
    });
  });
  describe('it uses the argument array correctly', () => {
    it('returns a new array', () => {
      const arg = [];
      const returned = mapToNumber([]);
      assert.notStrictEqual(returned, arg);
    });
    it('does not modify the argument', () => {
      const arg = ['a', 1, true, null, undefined];
      mapToNumber(arg);
      assert.deepStrictEqual(arg, ['a', 1, true, null, undefined]);
    });
    it('throws a TypeError if the argument is not an array', () => {
      const shouldThrow = () => mapToNumber(14);
      assert.throws(shouldThrow, TypeError, 'arr');
    });
  });
});









