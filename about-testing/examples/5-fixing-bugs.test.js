'use strict';

/*
  the docs and the tests describes how the function should behave
    but maybe there's a bug!
    the test will help you find out ;)

  practice trusting the tests to help you find your solution
    which tests cases pass? which fail?
    what does this tell you about your function?
*/

/**
 * replaces a specific entry in an array
 * this function does not modify the original array
 * @param {Array} arr - an array of items, one will be changed
 * @param {number} index - the index to replace
 * @param {any} newEntry - the value to put at that index
 * @returns {Array} a copy of the array with one entry modified
 */
const replaceEntry = (arr, index, newEntry) => {
  if (index < 0) {
    return 'index cannot be less than 0';
  }

  const copy = [arr];
  // const copy = [...arr];
  copy[index] = newEntry; 
  return copy;
};

// the test cases describe what the function is expected to do
// can you read the tests & test results to figure out what the function actually does?
//  be sure to expand all the failing logs in the console!
describe('replaceEntry: replaces a specific entry in an array', () => {
  describe('replaceEntry checks for a valid index', () => {
    it('the index cannot be less than 0', () => {
      const expected = 'index cannot be less than 0';
      const actual = replaceEntry(['a', 'b', 'c'], -1, 'x');
      expect(actual).toEqual(expected);
    });
    it('the index can be 0', () => {
      const expected = ['x', 'b', 'c'];
      const actual = replaceEntry(['a', 'b', 'c'], 0, 'x');
      expect(actual).toEqual(expected);
    });
  });
  describe('replaceEntry replaces the correct entry', () => {
    it('it can replace the first value', () => {
      const expected = ['x', 'b', 'c'];
      const actual = replaceEntry(['a', 'b', 'c'], 0, 'x');
      expect(actual).toEqual(expected);
    });
    it('it can add a new value at 1', () => {
      const expected = ['a', 'x', 'c'];
      const actual = replaceEntry(['a', 'b', 'c'], 1, 'x');
      expect(actual).toEqual(expected);
    });
    it('it can add the same value at 1', () => {
      const expected = ['a', 'b', 'c'];
      const actual = replaceEntry(['a', 'b', 'c'], 1, 'b');
      expect(actual).toEqual(expected);
    });
    it('it can replace the last value', () => {
      const expected = ['a', 'b', 'x'];
      const actual = replaceEntry(['a', 'b', 'c'], 2, 'x');
      expect(actual).toEqual(expected);
    });
  });
  describe('replaceEntry has no side-effects', () => {
    it('it does not modify the argument array', () => {
      const argArray = ['a', 'b', 'c'];
      replaceEntry(argArray, 1, 'x');
      expect(argArray).toEqual(['a', 'b', 'c']);
    });
  });
});
