'use strict';

describe('bracket notation', () => {
  describe('types of tasty treats', () => {
    const key1 = 'dry';
    const key2 = _;
    const obj = {};
    obj[key2] = _;
    obj[_] = 'bread';
    it('obj.wet', () => {
      expect(obj.wet).toEqual('soup');
    });
    it('obj.dry', () => {
      expect(obj[_]).toEqual(_);
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
      expect(obj.flying).toEqual('crane');
    });
    it('obj.running', () => {
      expect(obj.running).toEqual(fastAnimal);
    });
    it('obj.swimming', () => {
      expect(obj[water]).toEqual('mackerel');
    });
  });
});
