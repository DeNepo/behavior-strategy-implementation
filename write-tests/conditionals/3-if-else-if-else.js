'use strict';

const expect = chai.expect;

/**
 * returns a description of how similar two values are
 * @param {any} val1
 * @param {any} val2
 * @returns {string} the values' sameness
 */
const sameness = (val1, val2) => {
  let result = '';
  if (val1 === val2) {
    result = 'strictly equal';
  } else if (typeof val1 === typeof val2) {
    result = 'same type';
  } else {
    result = 'totally different';
  }
  return result;
};

describe('sameness determines how similar two values are', () => {
  describe('when values are strictly equal', () => {
    it('strings', () => {
      expect(sameness('hello', 'hello')).to.equal(_);
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
