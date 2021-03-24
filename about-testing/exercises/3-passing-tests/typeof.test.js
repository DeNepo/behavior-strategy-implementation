'use strict';

/**
 * returns the type of any value
 * @param {any} value - any javascript value
 * @returns {string} the value's type
 */
const typeofValue = () => {};

describe('the function returns the type of any value', () => {
  describe('"string"', () => {
    it('an empty one', () => expect(typeofValue('')).toEqual('string'));
    it('a short one', () => expect(typeofValue('toads')).toEqual('string'));
    it('a long one', () => {
      const longString = 'aiugn0923gonh dc987rz8xbs1';
      expect(typeofValue(longString)).toEqual('string');
    });
  });
  describe('"number"', () => {
    it('NaN is a number', () => expect(typeofValue(NaN)).toEqual('number'));
    it('0 is a number', () => expect(typeofValue(0)).toEqual('number'));
    it('-Infinity is a number', () =>
      expect(typeofValue(-Infinity)).toEqual('number'));
  });
  describe('"boolean"', () => {
    it('true', () => expect(typeofValue(true)).toEqual('boolean'));
    it('false', () => expect(typeofValue(false)).toEqual('boolean'));
  });
  describe('"undefined"', () => {
    it('passing undefined', () =>
      expect(typeofValue(undefined)).toEqual('undefined'));
    it('passing nothing', () => expect(typeofValue()).toEqual('undefined'));
  });
  describe('"object"', () => {
    it('null', () => expect(typeofValue(null)).toEqual('object'));
    it('an array', () => expect(typeofValue([])).toEqual('object'));
    it('an object', () => expect(typeofValue({})).toEqual('object'));
  });
  describe('"function"', () => {
    it('ES5', () => expect(typeofValue(function() {})).toEqual('function'));
    it('ES6', () => expect(typeofValue(() => {})).toEqual('function'));
  });
});
