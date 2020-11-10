'use strict';

const expect = chai.expect;

/**
 * converts two boolean values into a binary string
 *  true become "1", false becomes "0"
 * @param {boolean} a
 * @param {boolean} b
 * @returns {string}
 */
const booleanToBinary = (a, b) => {
  if (typeof a !== 'boolean') { throw new TypeError('a is not boolean'); }
  if (typeof b !== 'boolean') { throw new TypeError('b is not boolean'); }

  let binary = '';

  if (a) {
    binary += '1';
  } else {
    binary += '0';
  }

  if (b) {
    binary += '1';
  } else {
    binary += '0';
  }

  return binary;
};

// this function only 4 possible combinations of arguments
//  it's possible test them all and have 100% confidence in the function
describe('booleanToBinary: determines if a value is truthy', () => {
  describe('booleanToBinary correctly converts to binary', () => {
    it('true, true --> "11"', () => {
      const actual = booleanToBinary(_, _);
      expect(actual).to.equal(_);
    });
    it('true, false --> "10"', () => {
      const actual = _;
      expect(actual).to.equal('10');
    });
    it('false, true --> "01"', () => {
      const actual = _;
      _;
    });
    it('_', () => {
    });
  });
  describe('booleanToBinary has type-checks', () => {
    it('throws a TypeError if a is not boolean', () => {
      const shouldThrow = () => booleanToBinary('hello', false);
      expect(shouldThrow).to.throw(_, _);
    });
    it('throws a TypeError if b is not boolean', () => {
      const shouldThrow = () => _;
      _;
    });
  });
});
