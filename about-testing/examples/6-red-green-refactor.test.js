'use strict';

/*
  an important concept with testing is Red, Green, Refactor
    this is a habit for incremental programming

  Red
    at the beginning all of your tests fail
  Green
    then you pick one test to pass, and you pass it
    the rest will still fail, you'll get to them later
  Refactor
    read through your function and find a nicer way to write it
    without failing any tests you already passed!
  ... repeat -> Red, Green, Refactor
    choose another test to pass and write code to pass it
    careful not to fail any tests you've already passed!

  you will study this process in more depth with Function Design

*/

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
      expect(actual).toEqual(14);
    });
    it('returns Infinity', () => {
      const actual = numberOrType(Infinity);
      expect(actual).toEqual(Infinity);
    });
    it('returns NaN', () => {
      const actual = numberOrType(NaN);
      expect(actual).toEqual(NaN);
    });
  });
  describe('returns the type of any other value', () => {
    it('returns the type of strings', () => {
      const actual = numberOrType('asdf');
      expect(actual).toEqual('string');
    });
    it('returns the type of booleans', () => {
      const actual = numberOrType(false);
      expect(actual).toEqual('boolean');
    });
    it('returns the type of null', () => {
      const actual = numberOrType(null);
      expect(actual).toEqual('object');
    });
    it('returns the type of undefined', () => {
      const actual = numberOrType(undefined);
      expect(actual).toEqual('undefined');
    });
  });
});
