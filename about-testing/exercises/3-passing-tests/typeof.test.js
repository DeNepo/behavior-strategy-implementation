'use strict';

/**
 * returns the type of any value
 * @param {any} value - any javascript value
 * @returns {string} the value's type
 */
const typeofValue = () => {};

describe('the function returns the type of any value', () => {
  describe('"string"', () => {
    it('an empty one', () => expect(typeofValue('')).toStrictEqual('string'));
    it('a short one', () =>
      expect(typeofValue('toads')).toStrictEqual('string'));
    it('a long one', () => {
      const longString = 'aiugn0923gonh dc987rz8xbs1';
      expect(typeofValue(longString)).toStrictEqual('string');
    });
  });
  describe('"number"', () => {
    it('NaN is a number', () =>
      expect(typeofValue(NaN)).toStrictEqual('number'));
    it('0 is a number', () => expect(typeofValue(0)).toStrictEqual('number'));
    it('-Infinity is a number', () =>
      expect(typeofValue(-Infinity)).toStrictEqual('number'));
  });
  describe('"boolean"', () => {
    it('true', () => expect(typeofValue(true)).toStrictEqual('boolean'));
    it('false', () => expect(typeofValue(false)).toStrictEqual('boolean'));
  });
  describe('"undefined"', () => {
    it('passing undefined', () =>
      expect(typeofValue(undefined)).toStrictEqual('undefined'));
    it('passing nothing', () =>
      expect(typeofValue()).toStrictEqual('undefined'));
  });
  describe('"object"', () => {
    it('null', () => expect(typeofValue(null)).toStrictEqual('object'));
    it('an array', () => expect(typeofValue([])).toStrictEqual('object'));
    it('an object', () => expect(typeofValue({})).toStrictEqual('object'));
  });
  describe('"function"', () => {
    it('ES5', () =>
      expect(typeofValue(function() {})).toStrictEqual('function'));
    it('ES6', () => expect(typeofValue(() => {})).toStrictEqual('function'));
  });
});
