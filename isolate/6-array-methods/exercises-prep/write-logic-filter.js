'use strict';

const assert = chai.assert;

/**
 * returns true if a string is longer than 5 characters
 * otherwise returns false
 * @param {string} str - the string to check
 * @returns {boolean} is the string longer than 5?
 */
const longerThanFive = (str) => _;


describe('longerThanFive: determines if a string is longer than 5 characters', () => {
  describe('can be used on its own', () => {
    it('returns false for the empty string', () => {
      assert.strictEqual(longerThanFive(''), false);
    });
    it('returns false for a short string', () => {
      assert.strictEqual(longerThanFive('abc'), false);
    });
    it('returns false for strings of length 5', () => {
      assert.strictEqual(longerThanFive('abcde'), false);
    });
    it('returns true for strings of length 6', () => {
      assert.strictEqual(longerThanFive('abcdef'), true);
    });
    it('and for longer strings', () => {
      assert.strictEqual(longerThanFive('abcdefghijklmnopqrstuvwxyz'), true);
    });
  });
  describe('can be used as a callback for Array.filter', () => {
    it('finds nothing in an empty array', () => {
      const expected = [];
      const actual = [].filter(longerThanFive);
      assert.deepStrictEqual(actual, expected);
    });
    it('keeps all items when all are over 5 long', () => {
      const expected = ['123456', 'abcdef'];
      const actual = ['123456', 'abcdef'].filter(longerThanFive);
      assert.deepStrictEqual(actual, expected);
    });
    it('removes all items when all are under 5 long', () => {
      const expected = [];
      const actual = ['12345', 'abcde'].filter(longerThanFive);
      assert.deepStrictEqual(actual, expected);
    });
    it('keeps only the correct items', () => {
      const expected = ['abcdef'];
      const actual = ['12345', 'abcdef'].filter(longerThanFive);
      assert.deepStrictEqual(actual, expected);
    });
  });
});
