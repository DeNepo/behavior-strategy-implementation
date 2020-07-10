'use strict';

const assert = chai.assert;

/**
 * returns true if a number is even
 * otherwise returns false
 * @param {number} num - the number
 * @returns {boolean} is the number even?
 */
const isEven = (num) => _;


describe('isEven: determines if a number is even or not', () => {
  describe('can be used on its own', () => {
    it('returns false for positive odd numbers', () => {
      assert.strictEqual(isEven(3), false);
    });
    it('returns false for negative odd numbers', () => {
      assert.strictEqual(isEven(-3), false);
    });
    it('returns true for positive even numbers', () => {
      assert.strictEqual(isEven(4), true);
    });
    it('returns true for negative even numbers', () => {
      assert.strictEqual(isEven(-4), true);
    });
    it('returns true for 0', () => {
      assert.strictEqual(isEven(0), true);
    });
  });
  describe('can be used as a callback for Array.every', () => {
    it('returns true for the empty array', () => {
      const actual = [].every(isEven);
      assert.strictEqual(actual, true);
    });
    it('returns true if all numbers are even', () => {
      const actual = [2, 6, -8, -102, 102].every(isEven);
      assert.strictEqual(actual, true);
    });
    it('removes false if all numbers are odd', () => {
      const actual = [3, 7, -7, -101, 103].every(isEven);
      assert.strictEqual(actual, false);
    });
    it('returns false if the numbers are mixed', () => {
      const actual = [-2, -1, 0, 1, 2].every(isEven);
      assert.strictEqual(actual, false);
    });
  });
});
