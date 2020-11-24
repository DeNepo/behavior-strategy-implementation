'use strict';

const expect = require('chai').expect;

describe('ES6 object literal shorthand', () => {
  describe('types of tasty treats', () => {
    const wet = 'soup';
    const dry = 'bread';
    const obj = { _, _ };
    it('obj.dry', () => {
      expect(obj.dry).to.equal(_);
    });
    it('obj.wet', () => {
      expect(obj._).to.equal('soup');
    });
  });
  describe('ES5, ES6', () => {
    const tall = 'tree';
    const obj = {
      _,
      _: 'bush'
    };
    it('obj.short', () => {
      expect(obj.short).to.equal(_);
    });
    it('obj.tall', () => {
      expect(_).to.equal('tree');
    });
  });
  describe('a menagerie', () => {
    const swimming = _;
    const obj = {
      flying: _,
      _,
      _: 'cheetah'
    };
    it('obj.flying', () => {
      expect(_).to.equal('crane');
    });
    it('obj.running', () => {
      expect(obj.running).to.equal(_);
    });
    it('obj.swimming', () => {
      expect(_).to.equal('mackerel');
    });
  });
});
