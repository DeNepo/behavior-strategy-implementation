'use strict';

/**
 * Sums all numbery strings in an array.
 * Returns 0 if the array is empty.
 *
 * @param {string[]} arr - The array of strings.
 * @returns {number} The sum of all numbery strings.
 */
const sumNumbery = (arr) => {
  // these work, you need to pass them to the right array methods
  const isNotNaN = (entry) => {
    return !Number.isNaN(entry);
  };
  const sumNumbers = (acc, next) => {
    return acc + next;
  };
  const isString = (entry) => {
    return typeof entry === 'string';
  };
  const castToNumber = (entry) => {
    return Number(entry);
  };

  // fill in the array methods and pass the correct logic
  const areAllStrings = arr._(_); // a boolean value
  if (!areAllStrings) {
    return _;
  }

  const sumOfNumbery = arr._(_)._(_)._(_, _);

  return sumOfNumbery;
};

describe('sumNumbery: sums all the numbery strings in an array', () => {
  describe('it correctly sums the entries', () => {
    it('returns zero if all values are not a string', () => {
      const expected = 0;
      const actual = sumNumbery(['1', 'e', 4, '!', true]);
      expect(actual).toEqual(expected);
    });
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
    it('does not modify the argument', () => {
      const arg = ['hello', 'goodbye'];
      sumNumbery(arg);
      expect(arg).toEqual(['hello', 'goodbye']);
    });
  });
});
