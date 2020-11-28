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
const stub = (str = '', bool = true) => {
  if (typeof str !== 'string') throw new TypeError('input is not a string');
  if (typeof bool !== 'boolean') throw new TypeError('input is not a boolean');

    if (!bool) str = str.toUpperCase()
    else{
      str = str.toLowerCase();
    }
    return str;
};


/*
  your notes go here
*/

for (const solution of [
  secretSolution,
  stub
]) {
  describe(solution.name + ': sets a text to lower or upper case', () => {
    describe('the function\'s default parameters', () => {
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
      it('when the text is an empty string', () => {
        expect(solution('', true)).to.equal('');
      });
      // when the text is all upper case
      it('when the text is all upper case', () => {
        expect(solution('ABC', true)).to.equal('abc');
      });
      // when the text is all lower case
      it('when the text is all lower case', () => {
        expect(solution('abc', true)).to.equal('abc');
      });
      // when the text is mixed upper and lower case
      it('when the text is mixed upper and lower case', () => {
        expect(solution('aBc', true)).to.equal('abc');
      });
      // when the text contains punctuation
      it('when the text contains punctuation', () => {
        expect(solution('a,b;c', true)).to.equal('a,b;c');
      });
      // when the text contains numbers
      it('when the text contains numbers', () => {
        expect(solution('a12b', true)).to.equal('a12b');
      });
    });
    describe('when set to upper case', () => {
      // when the text is an empty string
      it('when the text is an empty string', () => {
        expect(solution('', false)).to.equal('');
      });
      // when the text is all upper case
      it('when the text is all upper case', () => {
        expect(solution('ABC', false)).to.equal('ABC');
      });
      // when the text is all lower case
      it('when the text is all lower case', () => {
        expect(solution('abc', false)).to.equal('ABC');
      });
      // when the text is mixed upper and lower case
      it('when the text is mixed upper and lower case', () => {
        expect(solution('aBc', false)).to.equal('ABC');
      });
      // when the text contains punctuation
      it('when the text contains punctuation', () => {
        expect(solution('a.b;c', false)).to.equal('A.B;C');
      });
      // when the text contains numbers
      it('when the text contains numbers', () => {
        expect(solution('a12b', false)).to.equal('A12B');
      });
    });
  });
};

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
