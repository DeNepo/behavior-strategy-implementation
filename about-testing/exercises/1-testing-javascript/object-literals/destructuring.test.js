'use strict';

const expect = require('chai').expect;

describe('destructuring', () => {
  describe('types of tasty treats', () => {
    const { dry, wet } = {
      wet: _,
      dry: 'bread'
    };
    it('dry', () => {
      expect(_).to.equal('bread');
    });
    it('wet', () => {
      expect(wet).to.equal('soup');
    });
  });
  describe('a menagerie', () => {
    const hairiest = 'cheetah';
    const oceanic = _;
    const obj = {
      [oceanic]: 'mackerel',
      running: hairiest
    };
    const birdy = _;
    obj[birdy] = _;
    const {
      swimming,
      flying,
      running
    } = obj;
    it('flying', () => {
      expect(flying).to.equal(_);
    });
    it('running', () => {
      expect(_).to.equal('cheetah');
    });
    it('swimming', () => {
      expect(swimming).to.equal('mackerel');
    });
  });
});
