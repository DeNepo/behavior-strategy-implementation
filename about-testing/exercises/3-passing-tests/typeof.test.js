'use strict';

const expect = require('chai').expect;

/**
 * returns the type of any value
 * @param {any} value - any javascript value
 * @returns {string} the value's type
 */
const typeofValue = (arg) => {
  return typeof arg;
};


describe('the function returns the type of any value', () => {
  describe('"string"', () => {
    it('an empty one', () => expect(typeofValue('')).to.equal('string'));
    it('a short one', () => expect(typeofValue('toads')).to.equal('string'));
    it('a long one', () => {
      const longString = 'aiugn0923gonh dc987rz8xbs1';
      expect(typeofValue(longString)).to.equal('string');
    });
  });
  describe('"number"', () => {
    it('NaN is a number', () => expect(typeofValue(NaN)).to.equal('number'));
    it('0 is a number', () => expect(typeofValue(0)).to.equal('number'));
    it('-Infinity is a number', () => expect(typeofValue(-Infinity)).to.equal('number'));
  });
  describe('"boolean"', () => {
    it('true', () => expect(typeofValue(true)).to.equal('boolean'));
    it('false', () => expect(typeofValue(false)).to.equal('boolean'));
  });
  describe('"undefined"', () => {
    it('passing undefined', () => expect(typeofValue(undefined)).to.equal('undefined'));
    it('passing nothing', () => expect(typeofValue()).to.equal('undefined'));
  });
  describe('"object"', () => {
    it('null', () => expect(typeofValue(null)).to.equal('object'));
    it('an array', () => expect(typeofValue([])).to.equal('object'));
    it('an object', () => expect(typeofValue({})).to.equal('object'));
  });
  describe('"function"', () => {
    it('ES5', () => expect(typeofValue(function () { })).to.equal('function'));
    it('ES6', () => expect(typeofValue(() => { })).to.equal('function'));
  });
});


