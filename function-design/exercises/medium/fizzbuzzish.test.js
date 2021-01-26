'use strict';

/**
 *  checks if a number is divisible by 5, 3 or both:
 *    numbers divisible by 3 and 5 return "fizzbuzz"
 *    numbers divisible by only 3 return "fizz"
 *    numbers divisible by only 5 return "buzz"
 *    all other numbers are returned un-changed
 *  @param {number} [num=0] - the number to convert
 *    max must be an integer greater than or equal to 0
 *  @returns {number|string} either "fizz", "buzz", "fizzbuzz" or the original number
 */
const stub = () => {};

/*

*/

for (const solution of [
  secretSolution,
  // stub,
]) {
  describe(solution.name + ': fizbuzzish', () => {
    describe('default parameter is 0', () => {
      it('returns "fizzbuzz" when no argument is passed', () =>
        expect(solution()).toBe('fizzbuzz'));
    });

    describe('not divisible by 3 or 5', () => {
      it('1', () => {
        expect(solution(1)).toBe(1);
      });
      it('2', () => {
        expect(solution(2)).toBe(2);
      });
      // write more tests in this category
    });

    describe('only divisible by only 3', () => {
      const expectedValue = 'fizz';
      it('3', () => {
        expect(solution(3)).toBe(expectedValue);
      });
      it('6', () => {
        expect(solution(6)).toBe(expectedValue);
      });
      // write more tests in this category
    });

    describe('only divisible by only 5', () => {
      const expectedValue = 'buzz';
      it('5', () => {
        expect(solution(5)).toBe(expectedValue);
      });
      it('10', () => {
        expect(solution(10)).toBe(expectedValue);
      });
      // write more tests in this category
    });

    describe('divisible by 5 and 3', () => {
      const expectedValue = 'fizzbuzz';
      it('15', () => {
        expect(solution(15)).toBe(expectedValue);
      });
      it('30', () => {
        expect(solution(30)).toBe(expectedValue);
      });
      // write more tests in this category
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) { throw new TypeError("num is not a number"); } if (0 > a) { throw new RangeError("num is less than 0"); } if (!Number.isInteger(a)) { throw new RangeError("num is not an integer"); } return 0 == a % 3 && 0 == a % 5 ? "fizzbuzz" : 0 == a % 3 ? "fizz" : 0 == a % 5 ? "buzz" : a }
