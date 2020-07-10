'use strict';

const assert = chai.assert;

/**
 * reverses a string
 * @param {string} str - the string to reverse
 * @returns {string} the string, reversed
 */
const reverseString = (str) => _;


describe('reverseString: reverses a string', () => {
  describe('can be used on its own', () => {
    it('returns an empty string for the empty string', () => {
      assert.strictEqual(reverseString(''), '');
    });
    it('"reverses" single characters', () => {
      assert.strictEqual(reverseString('f'), 'f');
    });
    it('reverses non-empty strings', () => {
      assert.strictEqual(reverseString('table'), 'elbat');
    });
    it('reverses palindromes', () => {
      assert.strictEqual(reverseString('racecar'), 'racecar');
    });
  });
  describe('can be used as a callback for Array.map', () => {
    it('returns an empty array for the empty array', () => {
      const actual = [].map(reverseString);
      assert.deepStrictEqual(actual, []);
    });
    it('reverses all strings in an array', () => {
      const actual = ['1234', 'uiop', '', '-|-'].map(reverseString);
      assert.deepStrictEqual(actual, ['4321', 'poiu', '', '-|-']);
    });
    it('reverses an array of palindromes', () => {
      const actual = ['racecar', '-|-', 'do geese see god'].map(reverseString);
      assert.deepStrictEqual(actual, ['racecar', '-|-', 'dog ees eseeg od']);
    });
  });
});
