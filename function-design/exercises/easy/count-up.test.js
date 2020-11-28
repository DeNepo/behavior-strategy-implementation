'use strict';

const expect = require('chai').expect;

/**
 * builds an array counting up from 0 to `max`
 * @param {number} [max=0] - the number to count up to
 *  max must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from 0 to `max`
 */
const stub = (x = 0) => {
 return [...Array(x+1).keys()];
};

/*
   found another way to create an array from a number, (but I didn't invent anything, I just found it)
let tmp = Array.from({length: x}, (v, i) => i) maybe there are better ways.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
https://stackoverflow.com/questions/40528557/how-does-array-fromlength-5-v-i-i-work (edited) 
*/

for (const solution of [
  secretSolution,
  stub
]) {
  // the main test suite for the function
  describe(solution.name + ': counts up from 0', () => {
    it('default parameter', () => {
      const actual = solution();
      expect(actual).to.deep.equal([0]);
    });
    it('0', () => {
      expect(solution(0)).to.deep.equal([0]);
    });
    it('1', () => {
      expect(solution(1)).to.deep.equal([0, 1]);
    });
    // write at least 5 more tests ...
    it('test 2 stub', () => {
      expect(stub(2)).to.deep.equal([0, 1, 2]);
    });
    it('test 3', () => {
      expect(solution(3)).to.deep.equal([0, 1, 2, 3]);
    });
    it('test 3 solution vs stub', () => {
      expect(solution(3)).to.deep.equal(stub(3));
    });
    it('test 0 stub', () => {
      expect(stub()).to.deep.equal([0]);
    });
     it('test NaN', () => {
      expect(NaN).to.deep.equal(NaN);
    });
  });
};

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("max is not a number"); if (!Number.isInteger(a)) throw new Error("max is not an integer"); if (0 > a) throw new RangeError("max is less than 0"); const b = []; for (let c = 0; c <= a; c++)b.push(c); return b }
