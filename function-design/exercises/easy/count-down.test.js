'use strict';

const expect = require('chai').expect;

/**
 * builds an array counting down from `start` to 0
 * @param {number} [start=0] - the number to count down from
 *  start must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from `start` to 0
 */
const stub = (x = 0) => {
  if ("number" != typeof x) throw new TypeError("start is not a number");
  if (!Number.isInteger(x)) throw new Error("start is not an integer");
  if (0 > x) throw new RangeError("start is less than 0");
  let tmp = [];
  for (let i= x;i >=0;i--){
    tmp.push(i);
    }
  return tmp;
};

/*
  your notes go here
*/

for (const solution of [
  secretSolution,
  stub
]) {
  // the main test suite for the function
  describe(solution.name + ': counts down to 0', () => {
    it('default parameter', () => {
      expect(solution()).to.deep.equal([0]);
    });
    it('0', () => {
      expect(solution(0)).to.deep.equal([0]);
    });
    it('1', () => {
      expect(solution(1)).to.deep.equal([1, 0]);
    });
    // write at least 5 more tests ...
    it('2', () => {
      expect(stub(2)).to.deep.equal([2, 1, 0]);
    });

    it('3', () => {
      expect(stub(3)).to.deep.equal([3, 2, 1, 0]);
    });

    it('4', () => {
      expect(stub(4)).to.deep.equal(secretSolution(4));
    });

    it('5', () => {
      expect(stub(12)).to.deep.equal(secretSolution(12));
    });

    it('6', () => {
      expect(stub(23)).to.deep.equal(secretSolution(23));
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("start is not a number"); if (!Number.isInteger(a)) throw new Error("start is not an integer"); if (0 > a) throw new RangeError("start is less than 0"); const b = []; for (let c = a; 0 <= c; c--)b.push(c); return b }
