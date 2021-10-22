// #todo

'use strict';

/**
 * returns the type of any value
 * @param {any} value - any javascript value
 * @returns {string} the value's type
 */
const typeofValue = () => {};

describe('the function returns the type of any value', () => {
  describe('"string"', () => {
    it('empty string -> "string"', () => {
      expect(typeofValue('')).toEqual('string');
    });
    it('a short string -> "string"', () => {
      expect(typeofValue('toads')).toEqual('string');
    });
    it('a long string -> "string"', () => {
      const longString = 'aiugn0923gonh dc987rz8xbs1';
      expect(typeofValue(longString)).toEqual('string');
    });
  });
  describe('"number"', () => {
    it('NaN -> "number"', () => {
      expect(typeofValue(NaN)).toEqual('number');
    });
    it('0 -> "number"', () => {
      expect(typeofValue(0)).toEqual('number');
    });
    it('-Infinity -> "number"', () => {
      expect(typeofValue(-Infinity)).toEqual('number');
    });
  });
  describe('"boolean"', () => {
    it('true -> "boolean"', () => {
      expect(typeofValue(true)).toEqual('boolean');
    });
    it('false -> "boolean"', () => {
      expect(typeofValue(false)).toEqual('boolean');
    });
  });
  describe('"undefined"', () => {
    it('undefined -> "undefined"', () => {
      expect(typeofValue(undefined)).toEqual('undefined');
    });
    it('no argument -> "undefined"', () => {
      expect(typeofValue()).toEqual('undefined');
    });
  });
  describe('"object"', () => {
    it('null -> "object"', () => {
      expect(typeofValue(null)).toEqual('object');
    });
    it('an array -> "object"', () => {
      expect(typeofValue([])).toEqual('object');
    });
    it('an object -> "object"', () => {
      expect(typeofValue({})).toEqual('object');
    });
  });
  describe('"function"', () => {
    it('an ES5 function -> "function"', () => {
      expect(typeofValue(function () {})).toEqual('function');
    });
    it('an ES6 arrow -> "function"', () => {
      expect(typeofValue(() => {})).toEqual('function');
    });
  });
});
