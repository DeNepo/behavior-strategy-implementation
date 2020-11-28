'use strict';

const expect = require('chai').expect;

/*
let d = NaN;
console.log(d !== d === true);
console.log(NaN !== NaN); 
console.log(NaN !== NaN === true); 
console.log(!NaN === !NaN);
*/

describe('primitives have a type and a value', () => {
  describe('null', () => {
    const primitive = null;
    it('type', () => {
      expect(typeof primitive).to.equal('object');
    });
    it('value', () => {
      expect(primitive).to.equal(null);
    });
  });
  describe('undefined', () => {
    const primitive = undefined;
    it('type', () => {
      expect(typeof primitive).to.equal('undefined');
    });
    it('value', () => {
      expect(primitive).to.equal(undefined);
    });
  });
  describe('Infinity', () => {
    const primitive = Infinity;
    it('type', () => {
      expect(typeof primitive).to.equal('number');
    });
    it('value', () => {
      expect(primitive).to.equal(Infinity);
    });
  });
  describe('4', () => {
    const primitive = 4;
    it('type', () => {
      expect(typeof primitive).to.equal('number');
    });
    it('value', () => {
      expect(primitive).to.equal(4);
    });
  });
  describe('"4"', () => {
    const primitive = '4';
    it('type', () => {
      expect(typeof primitive).to.equal('string');
    });
    it('value', () => {
      expect(primitive).to.equal('4');
    });
  });
  describe('false', () => {
    const primitive = false;
    it('type', () => {
      expect(typeof primitive).to.equal('boolean');
    });
    it('value', () => {
      expect(primitive).to.equal(false);
    });
  });
  describe('NaN', () => {
    const primitive = NaN;
    it('type', () => {
      expect(typeof primitive).to.equal('number');
    });
    it('value', () => {
      expect(primitive).not.to.equal(NaN);
    });
  });
});
