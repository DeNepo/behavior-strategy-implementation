'use strict';

const expect = require('chai').expect;

describe('dot notation', () => {
  describe('types of tasty treats', () => {
    const orite = _;
    const obj = {
      fav: orite,
      _: 'soup',
    };
    it('bread', () => {
      expect(obj._).to.equal('bread');
    });
    it('soup', () => {
      expect(obj.wet).to.equal('soup');
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
      expect(_).to.equal('crane');
    });
    it('obj.running', () => {
      expect(obj.running).to.equal(_);
    });
    it('obj.swimming', () => {
      expect(obj.swimming).to.equal('mackerel');
    });
  });
});
