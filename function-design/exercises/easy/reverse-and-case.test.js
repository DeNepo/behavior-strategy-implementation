'use strict';

const expect = require('chai').expect;

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */
const stub = (str = '', bool = true) => {
  if (typeof str !== 'string') throw new TypeError('input is not a string');
  if (typeof bool !== 'boolean') throw new TypeError('input is not a boolean');
  let tmp ='';
    for (let i= str.length; i > 0; i--){
       tmp+= str.charAt(i-1);
    }
    if (!bool) tmp = tmp.toUpperCase()
    else{
      tmp = tmp.toLowerCase();
    }
    return tmp;
};


/*
  console.log(secretSolution('ABC',true)) === 'cba';
  console.log(secretSolution('ABC',false) === 'CBA');
  console.log(secretSolution('',true) === '');
*/

for (const solution of [
  secretSolution,
  stub
]) {
  describe(solution.name + ': reverses a string then sets to lower or upper case', () => {
    describe('the function\'s default parameters', () => {
      it('second parameter defaults to true', () => {
        expect(solution('asdf')).to.equal('fdsa');
      });
      // when the text is an empty string
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
        expect(solution('ABC', true)).to.equal('cba');
      });
       // when the text is all lower case
      it('when the text is all lower case', () => {
        expect(solution('abc', true)).to.equal('cba');
      });
      // when the text is mixed upper and lower case
      it('when the text is mixed upper and lower case', () => {
        expect(solution('aBc', true)).to.equal('cba');
      });
      // when the text contains punctuation
      it('when the text contains punctuation', () => {
        expect(solution('a;b.c:d', true)).to.equal('d:c.b;a');
      });
      // when the text contains numbers
      it('when the text contains numbers', () => {
        expect(solution('abc123', true)).to.equal('321cba');
      });
    });

    describe('when set to upper case', () => {
      //when the text is an empty string
      it('when the text is an empty string', () => {
        expect(solution('', false)).to.equal('');
      });
      // when the text is all upper case
      it('when the text is all upper case', () =>{
        expect(solution('ABC', false)).to.equal('CBA');
      });
      // when the text is all lower case
      it('when the text is all lower case', () =>{
        expect(solution('abc', false)).to.equal('CBA');
      });
      // when the text is mixed upper and lower case
      it('when the text is mixed upper and lower case', () => {
        expect(solution('aBc', false)).to.equal('CBA');
      });
      // when the text contains punctuation
      it('when the text contains punctuation', () => {
        expect(solution('a;b.c:d', false)).to.equal('D:C.B;A');
      });
      // when the text contains numbers
      it('when the text contains numbers', () => {
        expect(solution('abc123', false)).to.equal('321CBA');
      });
    });
  });
};

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
