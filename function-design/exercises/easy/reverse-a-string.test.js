'use strict';

const expect = require('chai').expect;

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */
const stub = () => {};

/*
  your notes go here
*/

for (const solution of [
  secretSolution,
  // stub
]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string', () => {
      expect(solution()).to.equal('');
    });
    it('an empty string', () => {
      expect(solution('')).to.equal('');
    });
    it('all capital letters', () => {
      expect(solution('ASDF')).to.equal('FDSA');
    });
    // write at least 5 more tests ...
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
