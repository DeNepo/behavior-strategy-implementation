'use strict';

const assert = chai.assert;

/**
 * find the first negative number, returns undefined if there is none
 *  does not modify the array
 * @param {any[]} arr - the array of values
 * @returns {(number|undefined)} the first negative number
 */
const firstNegativeNumber = (arr) => {
  // these work, you need to pass them to the right array methods
  const isNegative = (entry) => entry < 0;
  const isNumber = (entry) => typeof entry === 'number';

  // fill in the array methods and pass the correct logic
  const negativeNumber = arr
    ._(_)
    ._(_);

  return negativeNumber;
};


describe('firstNegativeNumber: returns the first falsy string', () => {
  describe('it correctly sums the entries', () => {
    it('returns undefined for an empty array', () => {
      const expected = undefined;
      const actual = firstNegativeNumber([]);
      assert.strictEqual(actual, expected);
    });
    it('returns undefined if there are no numbers', () => {
      const expected = undefined;
      const actual = firstNegativeNumber(['hi!', '.', '=+/12']);
      assert.strictEqual(actual, expected);
    });
    it('returns undefined if all numbers are positive', () => {
      const expected = undefined;
      const actual = firstNegativeNumber([1, 2, 3]);
      assert.strictEqual(actual, expected);
    });
    it('returns the first negative number', () => {
      const expected = -1;
      const actual = firstNegativeNumber([-1, -200]);
      assert.strictEqual(actual, expected);
    });
    it('is not fooled by negative strings', () => {
      const expected = -2;
      const actual = firstNegativeNumber(['-3', -2]);
      assert.strictEqual(actual, expected);
    });
    it('works with messy array', () => {
      const expected = -3;
      const actual = firstNegativeNumber([false, undefined, '-100', 3, -3, 40]);
      assert.strictEqual(actual, expected);
    });
  });
  describe('it uses the argument correctly', () => {
    it('does not modify the argument', () => {
      const arg = ['hello', 'goodbye'];
      firstNegativeNumber(arg);
      assert.deepStrictEqual(arg, ['hello', 'goodbye']);
    });
  });
});
