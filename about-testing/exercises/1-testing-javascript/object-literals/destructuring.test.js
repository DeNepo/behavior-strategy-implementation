'use strict';

describe('destructuring', () => {
  describe('types of tasty treats', () => {
    const { dry, wet } = {
      wet: _,
      dry: 'bread',
    };
    it('dry', () => {
      expect(_).toEqual('bread');
    });
    it('wet', () => {
      expect(wet).toEqual('soup');
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
      expect(flying).toEqual(_);
    });
    it('running', () => {
      expect(_).toEqual('cheetah');
    });
    it('swimming', () => {
      expect(swimming).toEqual('mackerel');
    });
  });
});
