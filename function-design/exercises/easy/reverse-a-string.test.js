'use strict';

const expect = require('chai').expect;

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */


const stub = (x = '') => {
    if ("string" != typeof x) throw new TypeError("it is not a string");
    return [...x].reverse().join('');
};

const stub2 = (x = '') => {
    let tmp ='';
    for (let i= x.length; i > 0; i--){
       tmp+= x.charAt(i-1);
    }
    return tmp;
};


/*
  your notes go here
*/

for (const solution of [
  secretSolution,
  stub,
  stub2
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
    it('no input for both functions', () => {
      expect(solution('12')).to.equal('21');
    });
     it('1', () => {
      expect(solution('1')).to.equal('1');
    });
     it('x', () => {
      expect(solution('x')).to.equal('x');
    });
    it('empty spaces', () => {
      expect(solution('pi pa po')).to.equal('op ap ip');
    });
    it('coercion', () => {
      expect(solution(String(123))).to.equal('321');
    });
    it('confront the 3 together', () => {
      expect(solution(String(123))).to.equal(stub('123')).to.equal(stub2('123'));
    });

  });
};

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
