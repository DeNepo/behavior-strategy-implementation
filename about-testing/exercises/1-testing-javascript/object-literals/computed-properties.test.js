'use strict';

const expect = require('chai').expect;

describe('computed properties', () => {
  describe('types of tasty treats', () => {
    const wet = 'soup';
    const dry = 'bread';
    const obj = {
      [_]: 'wet',
      _: _,
    };
    it('obj.soup', () => {
      expect(obj.soup).to.equal('wet');
    });
    it('obj.dry', () => {
      expect(obj.bread).to.equal(_);
    });
  });
  describe('a menagerie', () => {
    const swimming = 'mackerel';
    const mackerel = 'swimming';
    const inTheSky = _;
    const obj = {
      [_]: 'crane',
      [_]: _,
      running: _,
    };
    it('obj.flying', () => {
      expect(obj.flying).to.equal('crane');
    });
    it('obj.running', () => {
      expect(_).to.equal('cheetah');
    });
    it('obj.swimming', () => {
      expect(obj[mackerel]).to.equal(swimming);
    });
  });
});
