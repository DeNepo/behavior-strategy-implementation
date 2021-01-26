'use strict';

describe('dot notation', () => {
  describe('types of tasty treats', () => {
    const orite = _;
    const obj = {
      fav: orite,
      _: 'soup',
    };
    it('bread', () => {
      expect(obj._).toBe('bread');
    });
    it('soup', () => {
      expect(obj.wet).toBe('soup');
    });
  });
  describe('a menagerie', () => {
    const swimming = 'mackerel';
    const obj = {
      flying: _,
      _: swimming,
      _: 'cheetah',
    };
    it('obj.flying', () => {
      expect(_).toBe('crane');
    });
    it('obj.running', () => {
      expect(obj.running).toBe(_);
    });
    it('obj.swimming', () => {
      expect(obj.swimming).toBe('mackerel');
    });
  });
});
