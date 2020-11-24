'use strict';

const expect = require('chai').expect;

describe('bracket notation', () => {
  describe('types of tasty treats', () => {
    const key1 = 'dry';
    const key2 = _;
    const obj = {};
    obj[key2] = _;
    obj[_] = 'bread'
    it('obj.wet', () => {
      expect(obj.wet).to.equal('soup');
    });
    it('obj.dry', () => {
      expect(obj[_]).to.equal(_);
    });
  });
  describe('a menagerie', () => {
    const motion = 'running';
    const fastAnimal = 'cheetah';
    const water = _;
    const obj = {
      swimming: 'mackerel'
    };
    obj[_] = _;
    obj['flying'] = _;
    it('obj.flying', () => {
      expect(obj.flying).to.equal('crane');
    });
    it('obj.running', () => {
      expect(obj.running).to.equal(fastAnimal);
    });
    it('obj.swimming', () => {
      expect(obj[water]).to.equal('mackerel');
    });
  });
});
