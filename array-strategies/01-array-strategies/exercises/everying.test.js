'use strict';

/**
 * returns true if no values are numbers, otherwise returns false
 * does not modify the argument array
 * @param {Array} arr - the array of values to filter
 * @returns {Array} - a new array with no strings
 */
const containsNoNumbers = (arr = []) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('arr is not an array');
  }

  let noNumbers = _;
  for (const _ of _) {
  }

  return noNumbers;
};

describe('containsNoNumbers checks if an array contains no numbers', () => {
  describe('it returns true when there are no numbers', () => {
    it('for an empty array', () => {
      const actual = containsNoNumbers([]);
      expect(actual).toStrictEqual(true);
    });
    it('if there are only strings', () => {
      const actual = containsNoNumbers(['1', '', 'asdf']);
      expect(actual).toStrictEqual(true);
    });
    it('if there are only booleans', () => {
      const actual = containsNoNumbers([true, false]);
      expect(actual).toStrictEqual(true);
    });
    it('if there is only null and undefined', () => {
      const actual = containsNoNumbers([null, undefined]);
      expect(actual).toStrictEqual(true);
    });
    it('if there are all other primitive types', () => {
      const actual = containsNoNumbers([null, undefined, true, 'asdf']);
      expect(actual).toStrictEqual(true);
    });
  });

  describe('it returns false if there are numbers in the array', () => {
    it('if there is only one number', () => {
      const actual = containsNoNumbers([1]);
      expect(actual).toStrictEqual(false);
    });
    it('if the number is NaN', () => {
      const actual = containsNoNumbers([NaN]);
      expect(actual).toStrictEqual(false);
    });
    it('if there are many numbers', () => {
      const actual = containsNoNumbers([1, 2, 0, -100]);
      expect(actual).toStrictEqual(false);
    });
    it('if there is a number at the beginning', () => {
      const actual = containsNoNumbers([1, 'asdf', true, null]);
      expect(actual).toStrictEqual(false);
    });
    it('if there is a number at the end', () => {
      const actual = containsNoNumbers(['asdf', true, null, 1]);
      expect(actual).toStrictEqual(false);
    });
    it('if there is a number in the middle', () => {
      const actual = containsNoNumbers([true, 0, 'hello']);
      expect(actual).toStrictEqual(false);
    });
  });

  describe('it uses the argument array correctly', () => {
    it('does not modify the argument', () => {
      const arg = ['a', 1, true, null, undefined];
      containsNoNumbers(arg);
      expect(arg).toStrictEqual(['a', 1, true, null, undefined]);
    });
    it('throws a TypeError if the argument is not an array', () => {
      const shouldThrow = () => containsNoNumbers(14);
      expect(shouldThrow).toThrow();
    });
  });
});
