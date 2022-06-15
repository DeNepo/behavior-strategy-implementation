// #todo

'use strict';

/* 0. Starter Code

  Each exercises will have this format:
  - a JSDoc describing the behavior
  - an empty space where you'll write your solutions
  - a for-of loop with test cases inside
  - a secret solution you can use to write tests

*/

// =============== JSDoc description of the challenge ===============

/**
 * Repeats a string a specific number of times.
 *
 * @param {string} [text=''] - The string to repeat. defaults to empty string.
 * @param {number} [repetitions=1] - How many times to repeat. defaults to 1.
 *  Repetitions must be greater than zero, and must be an integer.
 * @return {string} The text repeated as many times as repetitions.
 */

// =============== your solutions will go here ===============

// =============== a for-of loop to control which solution(s) are tested ===============

for (const solution of [secretSolution]) {
  // =============== test cases for this challenge ===============

  describe(solution.name + ': _', () => {
    describe('_', () => {
      it('_', () => {});
    });
  });
}

// =============== a minified solution you can use to test your test cases ===============

// prettier-ignore
function secretSolution(a = "", b = 1) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("number" != typeof b) { throw new TypeError("repetitions is not a number"); } if (0 > b) { throw new RangeError("repetitions is less than zero"); } if (!Number.isInteger(b)) { throw new RangeError("repetitions is not an integer"); } return Array(b).fill(a).join(""); }
