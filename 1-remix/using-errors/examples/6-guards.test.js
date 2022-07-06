// #todo

'use strict';

/*

  "guards" is when a function throws an error if arguments are not correct in some way
  this way your functions will not silently do the wrong thing
  and when you code stops on an error, you can figure out where the mistake comes from

  There are no exercises for testing type guards in this folder
    you can practice this in /function-design and /fuzz-testing


*/

/**
 * Adds two numbers together.
 * If either parameter is not a number or is NaN, the function throws a TypeError
 *
 * @param {number} [a=0] - the left operand for addition
 * @param {number} [b=0] - the right operand for addition
 * @returns {number} the sum of a and b if they are numbers and not NaN
 *
 * @throws {TypeError} a is not a number
 * @throws {TypeError} a is NaN
 * @throws {TypeError} b is not a number
 * @throws {TypeError} b is NaN
 */
const addTwoNumbers = (a = 0, b = 0) => {
  if (typeof a !== 'number') {
    throw new TypeError('a is not a number');
  }
  if (Number.isNaN(a)) {
    throw new TypeError('a is NaN');
  }
  if (typeof b !== 'number') {
    throw new TypeError('b is not a number');
  }
  if (Number.isNaN(b)) {
    throw new TypeError('b is NaN');
  }

  return a + b;
};

describe('addTwoNumbers will only add two numbers', () => {
  describe('it adds two numbers as expected', () => {
    it('adds positive numbers', () => {
      expect(addTwoNumbers(1, 3)).toEqual(4);
    });
    it('adds negative numbers', () => {
      expect(addTwoNumbers(-1, -4)).toEqual(-5);
    });
    it('adds mixed +/- numbers', () => {
      expect(addTwoNumbers(1, -2)).toEqual(-1);
    });
    it('adds decimal numbers numbers', () => {
      expect(addTwoNumbers(1.5, 1.5)).toEqual(3);
    });
  });
  describe('default parameters are 0', () => {
    it('second parameter defaults to 0', () => {
      expect(addTwoNumbers(1)).toEqual(1);
    });
    it('both parameters default to 0', () => {
      expect(addTwoNumbers()).toEqual(0);
    });
  });
  describe('both parameters have a type guard', () => {
    it('a must be a number', () => {
      const shouldThrow = () => {
        addTwoNumbers('2', 1);
      };
      expect(shouldThrow).toThrow(new TypeError('a is not a number'));
    });
    it('a cannot be NaN', () => {
      const shouldThrow = () => {
        addTwoNumbers(NaN, 1);
      };
      expect(shouldThrow).toThrow(new TypeError('a is NaN'));
    });
    it('b must be a number', () => {
      const shouldThrow = () => {
        addTwoNumbers(1, true);
      };
      expect(shouldThrow).toThrow(new TypeError('b is not a number'));
    });
    it('b cannot be NaN', () => {
      const shouldThrow = () => {
        addTwoNumbers(1, NaN);
      };
      expect(shouldThrow).toThrow(new TypeError('b is NaN'));
    });
  });
});
