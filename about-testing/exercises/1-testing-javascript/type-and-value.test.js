'use strict';

const expect = require('chai').expect;

describe('primitives have a type and a value', () => {
  describe('null', () => {
    const primitive = null;
    it('type', () => {
      expect(typeof primitive).to.equal(_);
    });
    it('value', () => {
      expect(primitive).to.equal(_);
    });
  });
  describe('undefined', () => {
    const primitive = undefined;
    it('type', () => {
      expect(typeof primitive).to.equal(_);
    });
    it('value', () => {
      expect(primitive).to.equal(_);
    });
  });
  describe('Infinity', () => {
    const primitive = Infinity;
    it('type', () => {
      expect(typeof primitive).to.equal(_);
    });
    it('value', () => {
      expect(primitive).to.equal(_);
    });
  });
  describe('4', () => {
    const primitive = 4;
    it('type', () => {
      expect(typeof primitive).to.equal(_);
    });
    it('value', () => {
      expect(primitive).to.equal(_);
    });
  });
  describe('"4"', () => {
    const primitive = '4';
    it('type', () => {
      expect(typeof primitive).to.equal(_);
    });
    it('value', () => {
      expect(primitive).to.equal(_);
    });
  });
  describe('false', () => {
    const primitive = false;
    it('type', () => {
      expect(typeof primitive).to.equal(_);
    });
    it('value', () => {
      expect(primitive).to.equal(_);
    });
  });
  describe('NaN', () => {
    const primitive = NaN;
    it('type', () => {
      expect(typeof primitive).to.equal(_);
    });
    it('value', () => {
      expect(primitive).to.equal(_);
    });
  });
});
