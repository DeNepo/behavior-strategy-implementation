'use strict';

describe('dot notation', () => {
  describe('types of tasty treats', () => {
    const orite = _;
    const obj = {
      fav: orite,
      _: 'soup',
    };
    it('bread', () => {
      expect(obj._).toEqual('bread');
    });
    it('soup', () => {
      expect(obj.wet).toEqual('soup');
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
      expect(_).toEqual('crane');
    });
    it('obj.running', () => {
      expect(obj.running).toEqual(_);
    });
    it('obj.swimming', () => {
      expect(obj.swimming).toEqual('mackerel');
    });
  });
});
