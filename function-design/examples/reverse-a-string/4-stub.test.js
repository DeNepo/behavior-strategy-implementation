'use strict';

const expect = require('chai').expect;

/**
 * repeats a string a specific number of times
 * @param {string} [text=''] - the string to repeat. defaults to empty string
 * @param {number} [repetitions=1] - how many times to repeat. defaults to 1
 *  repetitions must be greater than zero, and must be an integer
 * @return {string} the text repeated as many times as repetitions
 */
const stub = (text = '', repetitions = 1) => {
  return ''; // return a default value of the correct type, to get started with something
};

/*
  your notes go here
*/

// a for-of loop that will let you control which function is being tested
//  it will begin by testing the secretSolution to make sure your tests are correct
//  later you will test your first solution, then your 2nd, 3rd, ...
for (const solution of [
  // secretSolution, //     <--- comment out the secretSolution ---
  stub, //          <--- write your function's name here. and you're ready to test! ---
]) {
  // the main test suite for the function
  describe(solution.name + ': repeating a string:', () => {
    describe('default parameters', () => {
      it('repeat once if no repetitions is passed', () => {
        expect(solution('asdf')).to.equal('asdf');
      });
      it('expect an empty string if no arguments are passed', () => {
        expect(solution()).to.equal('');
      });
    });
    describe('an empty string', () => {
      it('0 times', () => {
        expect(solution('', 0)).to.equal('');
      });
      it('10 times', () => {
        expect(solution('', 10)).to.equal('');
      });
      it('100 times', () => {
        expect(solution('', 100)).to.equal('');
      });
    });
    describe('zero repetitions', () => {
      it('"asdf"', () => {
        expect(solution('asdf', 0)).to.equal('');
      });
      it('"tommywalk"', () => {
        expect(solution('tommywalk', 0)).to.equal('');
      });
    });
    describe('standard use cases', () => {
      it('repeat a phrase 3 times', () => {
        expect(solution('go to school', 3)).to.equal(
          'go to schoolgo to schoolgo to school'
        );
      });
      it('phrases with punctuation', () => {
        expect(solution('"Go!", said Dr. Seuss?', 2)).to.equal(
          '"Go!", said Dr. Seuss?"Go!", said Dr. Seuss?'
        );
      });
      it('special characters', () => {
        expect(solution('\\ \n \t s', 2)).to.equal('\\ \n \t s\\ \n \t s');
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = 1) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("number" != typeof b) { throw new TypeError("repetitions is not a number"); } if (0 > b) { throw new RangeError("repetitions is less than zero"); } if (!Number.isInteger(b)) { throw new RangeError("repetitions is not an integer"); } return Array(b).fill(a).join(""); }
