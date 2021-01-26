'use strict';

describe('bracket notation', () => {
  describe('types of tasty treats', () => {
    const key1 = 'dry';
    const key2 = _;
    const obj = {};
    obj[key2] = _;
    obj[_] = 'bread';
    it('obj.wet', () => {
      expect(obj.wet).toStrictEqual('soup');
    });
    it('obj.dry', () => {
      expect(obj[_]).toStrictEqual(_);
    });
  });
  describe('a menagerie', () => {
    const motion = 'running';
    const fastAnimal = 'cheetah';
    const water = _;
    const obj = {
      swimming: 'mackerel',
    };
    obj[_] = _;
    obj['flying'] = _;
    it('obj.flying', () => {
      expect(obj.flying).toStrictEqual('crane');
    });
    it('obj.running', () => {
      expect(obj.running).toStrictEqual(fastAnimal);
    });
    it('obj.swimming', () => {
      expect(obj[water]).toStrictEqual('mackerel');
    });
  });
});
