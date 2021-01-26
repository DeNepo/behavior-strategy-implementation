'use strict';

/**
 * this function decides how similar two values are
 * @param {any} a - the first value
 * @param {any} b - the second value
 * @returns {string} how similar are a and b?
 */
const howSimilarAre = () => {};

describe('determine how similar two values are', () => {
  describe('exactly the same', () => {
    const expected = 'exactly the same';
    it('1000 and 1e3', () => {
      const actual = howSimilarAre(1000, 1e3);
      expect(actual).toStrictEqual(expected);
    });
    it('NaN and NaN', () => {
      const actual = howSimilarAre(NaN, NaN);
      expect(actual).toStrictEqual(expected);
    });
    it('"hello" and "hello"', () => {
      const actual = howSimilarAre('hello', 'hello');
      expect(actual).toStrictEqual(expected);
    });
    it(' and ', () => {
      const actual = howSimilarAre('hello', 'hello');
      expect(actual).toStrictEqual(expected);
    });
  });
  describe('the same type', () => {
    const expected = 'the same type';
    it('"hello" and "goodbye"', () => {
      expect(howSimilarAre('hello', 'goodbye')).toStrictEqual(expected);
    });
    it('100 and -100', () => {
      expect(howSimilarAre(100, -100)).toStrictEqual(expected);
    });
    it('true and false', () => {
      expect(howSimilarAre(true, false)).toStrictEqual(expected);
    });
    it('[] and null', () => {
      expect(howSimilarAre([], null)).toStrictEqual(expected);
    });
  });
  describe('nothing alike', () => {
    it('true and 10', () => {
      expect(howSimilarAre(true, 10)).toStrictEqual('nothing alike');
    });
    it('"asdf" and { hi: "mom" }', () => {
      expect(howSimilarAre('asdf', { hi: 'mom' })).toStrictEqual(
        'nothing alike'
      );
    });
    it('null and undefined', () => {
      expect(howSimilarAre(null, undefined)).toStrictEqual('nothing alike');
    });
    it('"4" and 4', () => {
      expect(howSimilarAre('4', 4)).toStrictEqual('nothing alike');
    });
  });
});
