'use strict';

const expect = chai.expect;

/**
 * returns true if the value is truthy
 * returns false if the value is falsy
 * @param {any} value
 * @returns {boolean}
 */
const isTruthy = (value) => {
  if (value) {
    return true;
  } else {
    return false;
  }
};

/* Execution Paths
  when testing conditionals, you need to be test all paths
*/
describe('isTruthy: determines if a value is truthy', () => {
  // the if path
  describe('isTruthy can identify truthy values', () => {
    it('strings', () => {
      const actual = isTruthy(_);
      expect(actual).to.equal(true);
    });
    it('numbers', () => {
      const actual = _;
      expect(actual).to.equal(true);
    });
    it('booleans', () => {
      expect(isTruthy(_)).to.equal(true);
    });
  });
  // the else
  describe('isTruthy can identify falsy values', () => {
    it('strings', () => {
      _;
    });
    it('numbers', () => {
      _;
    });
    it('booleans', () => {
      _;
    });
    it('undefined', () => {
      _;
    });
    it('null', () => {
      _;
    });
  });
});
