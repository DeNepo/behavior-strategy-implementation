'use strict';

const expect = require('chai').expect;

/**
 * sums all numbery strings in an array of strings
 * returns 0 if the array is empty
 * it does not modify the original array (no side-effects)
 * @param {string[]} arr - the array of strings
 * @returns {number} the sum of all numbery strings
 */
const stub = () => { };


const mapFilterReduce = (arr) => {
  // these work, you need to pass them to the right array methods
  const isNotNaN = (entry) => !Number.isNaN(entry);
  const sumNumbers = (acc, next) => acc + next;
  const castToNumber = (entry) => Number(entry);

  // fill in the array methods and pass in the correct logic
  const sumOfNumberies = arr
    ._(_)
    ._(_)
    ._(_, _);

  return sumOfNumberies;
};



/*

*/


for (const solution of [
  secretSolution,
  // stub,
  // mapFilterReduce,
]) {

  describe(solution.name + ': _', () => {
    describe('_', () => {
      it('_', () => {

      });
    });
  });
}



// minified solution for testing your tests

function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arr is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arr contains non-strings"); } const c = a.map(a => +a).filter(a => !Number.isNaN(a)).reduce((a, b) => a + b, 0); return c }
