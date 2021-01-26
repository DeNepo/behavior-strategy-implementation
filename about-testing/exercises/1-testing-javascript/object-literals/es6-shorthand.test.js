'use strict';

describe('ES6 object literal shorthand', () => {
  describe('types of tasty treats', () => {
    const wet = 'soup';
    const dry = 'bread';
    const obj = { _, _ };
    it('obj.dry', () => {
      expect(obj.dry).toStrictEqual(_);
    });
    it('obj.wet', () => {
      expect(obj._).toStrictEqual('soup');
    });
  });
  describe('ES5, ES6', () => {
    const tall = 'tree';
    const obj = {
      _,
      _: 'bush',
    };
    it('obj.short', () => {
      expect(obj.short).toStrictEqual(_);
    });
    it('obj.tall', () => {
      expect(_).toStrictEqual('tree');
    });
  });
  describe('a menagerie', () => {
    const swimming = _;
    const obj = {
      flying: _,
      _,
      _: 'cheetah',
    };
    it('obj.flying', () => {
      expect(_).toStrictEqual('crane');
    });
    it('obj.running', () => {
      expect(obj.running).toStrictEqual(_);
    });
    it('obj.swimming', () => {
      expect(_).toStrictEqual('mackerel');
    });
  });
});
