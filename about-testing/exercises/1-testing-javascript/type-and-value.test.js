'use strict';

describe('primitives have a type and a value', () => {
  describe('null', () => {
    const primitive = null;
    it('type', () => {
      expect(typeof primitive).toStrictEqual(_);
    });
    it('value', () => {
      expect(primitive).toStrictEqual(_);
    });
  });
  describe('undefined', () => {
    const primitive = undefined;
    it('type', () => {
      expect(typeof primitive).toStrictEqual(_);
    });
    it('value', () => {
      expect(primitive).toStrictEqual(_);
    });
  });
  describe('Infinity', () => {
    const primitive = Infinity;
    it('type', () => {
      expect(typeof primitive).toStrictEqual(_);
    });
    it('value', () => {
      expect(primitive).toStrictEqual(_);
    });
  });
  describe('4', () => {
    const primitive = 4;
    it('type', () => {
      expect(typeof primitive).toStrictEqual(_);
    });
    it('value', () => {
      expect(primitive).toStrictEqual(_);
    });
  });
  describe('"4"', () => {
    const primitive = '4';
    it('type', () => {
      expect(typeof primitive).toStrictEqual(_);
    });
    it('value', () => {
      expect(primitive).toStrictEqual(_);
    });
  });
  describe('false', () => {
    const primitive = false;
    it('type', () => {
      expect(typeof primitive).toStrictEqual(_);
    });
    it('value', () => {
      expect(primitive).toStrictEqual(_);
    });
  });
  describe('NaN', () => {
    const primitive = NaN;
    it('type', () => {
      expect(typeof primitive).toStrictEqual(_);
    });
    it('value', () => {
      expect(primitive).toStrictEqual(_);
    });
  });
});
