'use strict';

/**
 * returns the type of any value
 * @param {any} value - any javascript value
 * @returns {string} the value's type
 */
const typeofValue = () => {

};


describe('the function returns the type of any value', () => {
  describe('"string"', () => {
    it('an empty one', () => expect(typeofValue('')).toBe('string'));
    it('a short one', () => expect(typeofValue('toads')).toBe('string'));
    it('a long one', () => {
      const longString = 'aiugn0923gonh dc987rz8xbs1';
      expect(typeofValue(longString)).toBe('string');
    });
  });
  describe('"number"', () => {
    it('NaN is a number', () => expect(typeofValue(NaN)).toBe('number'));
    it('0 is a number', () => expect(typeofValue(0)).toBe('number'));
    it('-Infinity is a number', () => expect(typeofValue(-Infinity)).toBe('number'));
  });
  describe('"boolean"', () => {
    it('true', () => expect(typeofValue(true)).toBe('boolean'));
    it('false', () => expect(typeofValue(false)).toBe('boolean'));
  });
  describe('"undefined"', () => {
    it('passing undefined', () => expect(typeofValue(undefined)).toBe('undefined'));
    it('passing nothing', () => expect(typeofValue()).toBe('undefined'));
  });
  describe('"object"', () => {
    it('null', () => expect(typeofValue(null)).toBe('object'));
    it('an array', () => expect(typeofValue([])).toBe('object'));
    it('an object', () => expect(typeofValue({})).toBe('object'));
  });
  describe('"function"', () => {
    it('ES5', () => expect(typeofValue(function () { })).toBe('function'));
    it('ES6', () => expect(typeofValue(() => { })).toBe('function'));
  });
});


