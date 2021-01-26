'use strict';

describe('destructuring', () => {
  describe('types of tasty treats', () => {
    const { dry, wet } = {
      wet: _,
      dry: 'bread',
    };
    it('dry', () => {
      expect(_).toStrictEqual('bread');
    });
    it('wet', () => {
      expect(wet).toStrictEqual('soup');
    });
  });
  describe('a menagerie', () => {
    const hairiest = 'cheetah';
    const oceanic = _;
    const obj = {
      [oceanic]: 'mackerel',
      running: hairiest,
    };
    const birdy = _;
    obj[birdy] = _;
    const { swimming, flying, running } = obj;
    it('flying', () => {
      expect(flying).toStrictEqual(_);
    });
    it('running', () => {
      expect(_).toStrictEqual('cheetah');
    });
    it('swimming', () => {
      expect(swimming).toStrictEqual('mackerel');
    });
  });
});
