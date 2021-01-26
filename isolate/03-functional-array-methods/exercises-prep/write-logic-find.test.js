'use strict';

/**
 * returns true if a string is excited
 * (meaning it contains an "!")
 * @param {string} str - the string
 * @returns {boolean} is it excited?
 */
const isExcited = str => {
  return _;
};

describe('isExcited: determines if a string is excited or not', () => {
  describe('can be used on its own', () => {
    it('returns true if "!" is at the beginning', () => {
      expect(isExcited('!asdf')).toStrictEqual(true);
    });
    it('returns true if "!" is in the middle', () => {
      expect(isExcited('as!df')).toStrictEqual(true);
    });
    it('returns true if "!" is at the end', () => {
      expect(isExcited('asdf!')).toStrictEqual(true);
    });
    it('returns false if there is no "!"', () => {
      expect(isExcited('asdf')).toStrictEqual(false);
    });
    it('returns false for the empty string', () => {
      expect(isExcited('')).toStrictEqual(false);
    });
  });
  describe('can be used as a callback for Array.find', () => {
    it('finds the only excited string', () => {
      const actual = ['', 'asdf', 'B!', ':('].find(isExcited);
      expect(actual).toStrictEqual('B!');
    });
    it('finds the first excited string', () => {
      const actual = ['', 'asdf', 'B!', 'A!', ':('].find(isExcited);
      expect(actual).toStrictEqual('B!');
    });
    it('returns undefined if there is no excited string', () => {
      const actual = ['', 'asdf', 'B', ':('].find(isExcited);
      expect(actual).toStrictEqual(undefined);
    });
    it('returns undefined for the empty array', () => {
      const actual = [].find(isExcited);
      expect(actual).toStrictEqual(undefined);
    });
  });
});
