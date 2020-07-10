'use strict';

const assert = chai.assert;

/**
 * joins two strings with a comma and a space
 * @param {string} acc - the left string
 * @param {string} str - the right string
 * @returns {string} the strings, joined
 */
const joinWithComma = (acc, next) => _;


describe('joinWithComma: joins two strings with a comma and a space', () => {
  describe('can be used on its own', () => {
    it('joins two empty strings', () => {
      assert.strictEqual(joinWithComma('', ''), ', ');
    });
    it('works when the left is empty', () => {
      assert.strictEqual(joinWithComma('', '123'), ', 123');
    });
    it('works when the right is empty', () => {
      assert.strictEqual(joinWithComma('abc', ''), 'abc, ');
    });
    it('works when neither string is empty', () => {
      assert.strictEqual(joinWithComma('red', 'green'), 'red, green');
    });
  });
  describe('can be used as a callback for Array.reduce', () => {
    it('Array.reduce throws an error if the array is empty', () => {
      const errorsOut = () => [].reduce(joinWithComma);
      assert.throws(errorsOut, TypeError, 'Reduce of empty array with no initial value');
    });
    it('Array.reduce returns the only item in an array of length 1', () => {
      const actual = ['1234'].reduce(joinWithComma);
      assert.strictEqual(actual, '1234');
    });
    it('Array.reduce uses joinWithComma for arrays of length 2', () => {
      const actual = ['12', '34'].reduce(joinWithComma);
      assert.strictEqual(actual, '12, 34');
    });
    it('Array.reduce uses joinWithComma for longer arrays', () => {
      const actual = ['1', '2', '3', '4', '5'].reduce(joinWithComma);
      assert.strictEqual(actual, '1, 2, 3, 4, 5');
    });
  });
});
