'use strict';

describe('arrays and objects, similar but different.', () => {
  describe('arrays:', () => {
    it('an array is equal to itself', () => {
      const actual = [1, 2, 3];
      const expected = _;
      expect(actual).toBe(expected);
    });
    it('two different arrays are not strictly equal', () => {
      const actual = [1, 2, 3];
      const expected = [1, 2, 3];
      expect(actual).not._(expected);
    });
    it('different arrays must be deep compared', () => {
      const actual = [1, 2, 3];
      const expected = _;
      expect(actual).toEqual(expected);
    });
    it('the order of entries is important', () => {
      const actual = [1, 2, 3];
      const expected = [3, 2, 1];
      expect(actual).not._(expected);
    });
  });
  describe('objects', () => {
    it('an object is equal to itself', () => {
      const actual = { a: 1, b: 2 };
      const expected = _;
      expect(actual).toBe(expected);
    });
    it('two different objects are not strictly equal', () => {
      const actual = { a: 1, b: 2 };
      const expected = { a: 1, b: 2 };
      expect(actual).not._(expected);
    });
    it('different objects must be deep compared', () => {
      const actual = { a: 1, b: 2 };
      const expected = _;
      expect(actual).toEqual(expected);
    });
    it('the order of key/value pairs is not important', () => {
      const actual = { a: 1, b: 2 };
      const expected = { b: 2, a: 1 };
      expect(actual)._._(expected);
    });
  });
});
