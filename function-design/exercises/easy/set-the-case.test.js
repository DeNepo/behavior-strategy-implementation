'use strict';

const expect = require('chai').expect;

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */
const stub = () => {};

/*
  your strategy goes here
*/

for (const solution of [
  secretSolution,
  // stub
]) {
  describe(solution.name + ': sets a text to lower or upper case', () => {
    describe("the function's default parameters", () => {
      it('second parameter defaults to true', () => {
        expect(solution('asdf')).to.equal('asdf');
      });
      it('first parameter defaults to an empty string', () => {
        expect(solution()).to.equal('');
      });
    });
    // write the tests indicated by the comments
    describe('when set to lower case', () => {
      // when the text is an empty string
      it(_, () => {
        expect(solution(_, _)).to.equal(_);
      });
      // when the text is all upper case
      // when the text is all lower case
      // when the text is mixed upper and lower case
      // when the text contains punctuation
      // when the text contains numbers
    });
    describe('when set to upper case', () => {
      // when the text is an empty string
      // when the text is all upper case
      // when the text is all lower case
      // when the text is mixed upper and lower case
      // when the text contains punctuation
      // when the text contains numbers
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
