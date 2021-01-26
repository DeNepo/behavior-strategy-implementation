'use strict';

describe('ES6 object literal shorthand', () => {
  describe('types of tasty treats', () => {
    const wet = 'soup';
    const dry = 'bread';
    const obj = { _, _ };
    it('obj.dry', () => {
      expect(obj.dry).toBe(_);
    });
    it('obj.wet', () => {
      expect(obj._).toBe('soup');
    });
  });
  describe('ES5, ES6', () => {
    const tall = 'tree';
    const obj = {
      _,
      _: 'bush'
    };
    it('obj.short', () => {
      expect(obj.short).toBe(_);
    });
    it('obj.tall', () => {
      expect(_).toBe('tree');
    });
  });
  describe('a menagerie', () => {
    const swimming = _;
    const obj = {
      flying: _,
      _,
      _: 'cheetah'
    };
    it('obj.flying', () => {
      expect(_).toBe('crane');
    });
    it('obj.running', () => {
      expect(obj.running).toBe(_);
    });
    it('obj.swimming', () => {
      expect(_).toBe('mackerel');
    });
  });
});
