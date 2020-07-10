'use strict';

const assert = chai.assert;

/**
 * returns true if a string is excited
 * (meaning it contains an "!")
 * @param {string} str - the string
 * @returns {boolean} is it excited?
 */
const isExcited = (str) => _;

describe('isExcited: determines if a string is excited or not', () => {
  describe('can be used on its own', () => {
    it('returns true if "!" is at the beginning', () => {
      assert.strictEqual(isExcited('!asdf'), true);
    });
    it('returns true if "!" is in the middle', () => {
      assert.strictEqual(isExcited('as!df'), true);
    });
    it('returns true if "!" is at the end', () => {
      assert.strictEqual(isExcited('asdf!'), true);
    });
    it('returns false if there is no "!"', () => {
      assert.strictEqual(isExcited('asdf'), false);
    });
    it('returns false for the empty string', () => {
      assert.strictEqual(isExcited(''), false);
    });
  });
  describe('can be used as a callback for Array.find', () => {
    it('finds the only excited string', () => {
      const actual = ['', 'asdf', 'B!', ':('].find(isExcited);
      assert.strictEqual(actual, 'B!');
    });
    it('finds the first excited string', () => {
      const actual = ['', 'asdf', 'B!', 'A!', ':('].find(isExcited);
      assert.strictEqual(actual, 'B!');
    });
    it('returns undefined if there is no excited string', () => {
      const actual = ['', 'asdf', 'B', ':('].find(isExcited);
      assert.strictEqual(actual, undefined);
    });
    it('returns undefined for the empty array', () => {
      const actual = [].find(isExcited);
      assert.strictEqual(actual, undefined);
    });
  });
});
