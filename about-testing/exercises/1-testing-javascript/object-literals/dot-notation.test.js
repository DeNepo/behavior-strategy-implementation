'use strict';

describe('dot notation', () => {
  describe('types of tasty treats', () => {
    const orite = _;
    const obj = {
      fav: orite,
      _: 'soup',
    };
    it('bread', () => {
      expect(obj._).toStrictEqual('bread');
    });
    it('soup', () => {
      expect(obj.wet).toStrictEqual('soup');
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
      expect(_).toStrictEqual('crane');
    });
    it('obj.running', () => {
      expect(obj.running).toStrictEqual(_);
    });
    it('obj.swimming', () => {
      expect(obj.swimming).toStrictEqual('mackerel');
    });
  });
});
