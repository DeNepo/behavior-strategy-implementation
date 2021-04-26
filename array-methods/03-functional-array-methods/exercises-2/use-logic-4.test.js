'use strict';

/**
 * sums all numbery strings in an array
 * returns 0 if the array is empty
 * @param {string[]} arr - the array of strings
 * @returns {number} the sum of all numbery strings
 */
const sumNumbery = arr => {
  // these work, you need to pass them to the right array methods
  const isNotNaN = entry => {
    return !Number.isNaN(entry);
  };
  const sumNumbers = (acc, next) => {
    return acc + next;
  };
  const isString = entry => {
    return typeof entry === 'string';
  };
  const castToNumber = entry => {
    return Number(entry);
  };

  // fill in the array methods and pass the correct logic
  const areAllStrings = arr._(_);
  if (!areAllStrings) {
    throw new TypeError('arr is not all strings');
  }

  const sumOfNumber = arr
    ._(_)
    ._(_)
    ._(_, _);

  return sumOfNumber;
};

describe('sumNumbery: sums all the numbery strings in an array', () => {
  describe('it correctly sums the entries', () => {
    it('returns zero for an empty array', () => {
      const expected = 0;
      const actual = sumNumbery([]);
      expect(actual).toEqual(expected);
    });
    it('returns zero if all strings are NaNy', () => {
      const expected = 0;
      const actual = sumNumbery(['hi!', '.', '=+/12']);
      expect(actual).toEqual(expected);
    });
    it('returns the sum if all strings are Numbery', () => {
      const expected = 6;
      const actual = sumNumbery(['1', '2', '3']);
      expect(actual).toEqual(expected);
    });
    it('only sums Numbery strings', () => {
      const expected = 6;
      const actual = sumNumbery(['.', '1', '3#', '2', '3', '-=-']);
      expect(actual).toEqual(expected);
    });
  });
  describe('it uses the argument correctly', () => {
    it('throws an error if all entries are not strings', () => {
      const arg = ['hello', 'goodbye', true];
      expect(() => sumNumbery(arg)).toThrow();
    });
    it('does not modify the argument', () => {
      const arg = ['hello', 'goodbye'];
      sumNumbery(arg);
      expect(arg).toEqual(['hello', 'goodbye']);
    });
  });
});
