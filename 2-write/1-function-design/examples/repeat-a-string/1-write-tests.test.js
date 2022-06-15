// #todo

'use strict';

/* 1. Write Test Cases

  Write as many test cases as you can to understand the challenge
    try thinking of edge cases!

  The secret solution is correct.  if your tests fail, fix your tests ;)

  After this step you will have a full suite of tests to check your own solutions.

*/

// =============== JSDoc description of the challenge ===============

/**
 * repeats a string a specific number of times
 * @param {string} [text=''] - the string to repeat. defaults to empty string
 * @param {number} [repetitions=1] - how many times to repeat. defaults to 1
 *  repetitions must be greater than zero, and must be an integer
 * @return {string} the text repeated as many times as repetitions
 */

// =============== your solutions will go here ===============

// =============== a for-of loop to control which solution(s) are tested ===============

for (const solution of [secretSolution]) {
  // =============== test cases for this challenge ===============

  describe(solution.name + ': repeating a string:', () => {
    describe('default parameters', () => {
      it('repeat once if no repetitions is passed', () => {
        expect(solution('asdf')).toEqual('asdf');
      });
      it('expect an empty string if no arguments are passed', () => {
        expect(solution()).toEqual('');
      });
    });
    describe('an empty string', () => {
      it('repeat an empty string 0 times -> ""', () => {
        expect(solution('', 0)).toEqual('');
      });
      it('repeat an empty string 10 times -> ""', () => {
        expect(solution('', 10)).toEqual('');
      });
      it('repeat an empty string 100 times -> ""', () => {
        expect(solution('', 100)).toEqual('');
      });
    });
    describe('zero repetitions', () => {
      it('repeat "asdf" 0 times -> ""', () => {
        expect(solution('asdf', 0)).toEqual('');
      });
      it('repeat "tommywalk" 0 times -> ""', () => {
        expect(solution('tommywalk', 0)).toEqual('');
      });
    });
    describe('standard use cases', () => {
      it('repeating a longer phrase 3 times', () => {
        expect(solution('go to school', 3)).toEqual(
          'go to schoolgo to schoolgo to school'
        );
      });
      it('repeating a phrase with punctuation', () => {
        expect(solution('"Go!", said Dr. Seuss?', 2)).toEqual(
          '"Go!", said Dr. Seuss?"Go!", said Dr. Seuss?'
        );
      });
      it('a string with special characters can be repeated', () => {
        expect(solution('\\ \n \t s', 2)).toEqual('\\ \n \t s\\ \n \t s');
      });
    });
  });
}

// =============== a minified solution you can use to test your test cases ===============

// prettier-ignore
function secretSolution(a = "", b = 1) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("number" != typeof b) { throw new TypeError("repetitions is not a number"); } if (0 > b) { throw new RangeError("repetitions is less than zero"); } if (!Number.isInteger(b)) { throw new RangeError("repetitions is not an integer"); } return Array(b).fill(a).join(""); }
