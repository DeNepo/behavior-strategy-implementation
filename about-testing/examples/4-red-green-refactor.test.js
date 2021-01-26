'use strict';

/**
 * returns the value if it's a number
 * otherwise returns the type of the value
 * @param {any} value
 * @returns {(number|string)}
 */
const numberOrType = value => {
  // pass the first test
  return 14;

  // // pass the second test
  // if (value === 14) {
  //   return 14;
  // } else {
  //   return Infinity
  // }

  // // pass the third test
  // if (value === 14) {
  //   return 14;
  // } else if (Number.isNaN(value)) {
  //   return NaN
  // } else {
  //   return Infinity
  // }

  // // refactor for code quality
  // if (typeof value === 'number') {
  //   return value;
  // }

  // // // pass all the tests
  // if (typeof value === 'number') {
  //   return value;
  // } else {
  //   return typeof value;
  // }
};

describe('numberOrType', () => {
  describe('returns numbers unchanged', () => {
    it('returns 14', () => {
      const actual = numberOrType(14);
      expect(actual).toStrictEqual(14);
    });
    it('returns Infinity', () => {
      const actual = numberOrType(Infinity);
      expect(actual).toStrictEqual(Infinity);
    });
    it('returns NaN', () => {
      const actual = numberOrType(NaN);
      expect(actual).toBeNaN();
    });
  });
  describe('returns the type of any other value', () => {
    it('returns the type of strings', () => {
      const actual = numberOrType('asdf');
      expect(actual).toStrictEqual('string');
    });
    it('returns the type of booleans', () => {
      const actual = numberOrType(false);
      expect(actual).toStrictEqual('boolean');
    });
    it('returns the type of null', () => {
      const actual = numberOrType(null);
      expect(actual).toStrictEqual('object');
    });
    it('returns the type of undefined', () => {
      const actual = numberOrType(undefined);
      expect(actual).toStrictEqual('undefined');
    });
  });
});
