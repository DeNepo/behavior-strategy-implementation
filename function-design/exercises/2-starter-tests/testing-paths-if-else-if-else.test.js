'use strict';

const expect = require('chai').expect;

/**
 * returns a description of how similar two values are
 * @param {any} val1
 * @param {any} val2
 * @returns {string} the values' solution
 */
const stub = () => { };




/*

*/


for (const solution of [
  secretSolution,
  // stub,
]) {
  describe(solution.name + ': determines how similar two values are', () => {
    describe('when values are strictly equal', () => {
      it('strings', () => {
        expect(solution('hello', 'hello')).to.equal(_);
      });
      it('numbers', () => {
        // 1, 1.0
      });
      it('booleans', () => {

      });
    });
    describe('when values have the same type', () => {
      it('strings', () => {
        expect(_).to.equal('same type');
      });
      it('numbers', () => {
        expect(_).to.equal(_);
      });
      it('booleans', () => {

      });
    });
    describe('when values are nothing alike', () => {
      it('obvious comparisons', () => {
        _(_(null, 4))._._(_);
      });
      it('deceptive comparisons', () => {
        // "4" and 4
      });
    });
  });
}


// minified solution for testing your tests
function secretSolution(a, b) { let c = ""; return c = a === b ? "strictly equal" : typeof a == typeof b ? "same type" : "totally different", c }
