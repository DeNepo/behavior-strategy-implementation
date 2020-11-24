'use strict';

const expect = require('chai').expect;

/**
 * this function decides how similar two values are
 * @param {any} a - the first value
 * @param {any} b - the second value
 * @returns {string} how similar are a and b?
 */
const howSimilarAre = () => {

};


describe('determine how similar two values are', () => {
  describe('exactly the same', () => {
    const expected = 'exactly the same';
    it('1000 and 1e3', () => {
      const actual = howSimilarAre(1000, 1e3);
      expect(actual).to.equal(expected);
    });
    it('NaN and NaN', () => {
      const actual = howSimilarAre(NaN, NaN);
      expect(actual).to.equal(expected);
    });
    it('"hello" and "hello"', () => {
      const actual = howSimilarAre('hello', 'hello');
      expect(actual).to.equal(expected);
    });
    it(' and ', () => {
      const actual = howSimilarAre('hello', 'hello');
      expect(actual).to.equal(expected);
    });
  });
  describe('the same type', () => {
    const expected = 'the same type';
    it('"hello" and "goodbye"', () => {
      expect(howSimilarAre('hello', 'goodbye')).to.equal(expected);
    });
    it('100 and -100', () => {
      expect(howSimilarAre(100, -100)).to.equal(expected);
    });
    it('true and false', () => {
      expect(howSimilarAre(true, false)).to.equal(expected);
    });
    it('[] and null', () => {
      expect(howSimilarAre([], null)).to.equal(expected);
    });
  });
  describe('nothing alike', () => {
    it('true and 10', () => {
      expect(howSimilarAre(true, 10)).to.equal('nothing alike');
    });
    it('"asdf" and { hi: "mom" }', () => {
      expect(howSimilarAre('asdf', { hi: "mom" })).to.equal('nothing alike');
    });
    it('null and undefined', () => {
      expect(howSimilarAre(null, undefined)).to.equal('nothing alike');
    });
    it('"4" and 4', () => {
      expect(howSimilarAre("4", 4)).to.equal('nothing alike');
    });
  });
});
