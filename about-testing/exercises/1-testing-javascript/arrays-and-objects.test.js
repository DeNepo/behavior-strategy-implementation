'use strict';

describe('arrays and objects, similar but different.', () => {
  describe('arrays:', () => {
    it('an array is equal to itself', () => {
      const array1 = [1, 2, 3];
      const alsoArray1 = _;
      expect(array1).toEqual(alsoArray1);
    });
    it('two different arrays are not strictly equal', () => {
      const array1 = [1, 2, 3];
      const array2 = [1, 2, 3];
      const areDifferentArrays = _;
      expect(areDifferentArrays).toEqual(true);
    });
    it('arrays with the same values will pass', () => {
      const actual = [1, 2, 3];
      const expected = _;
      expect(actual).toEqual(expected);
    });
    it('the order of entries is important', () => {
      // correct these arrays to pass the assertion
      const actual = [1, 2, 3];
      const expected = [3, 2, 1];
      expect(actual).toEqual(expected);
    });
  });
  describe('objects', () => {
    it('an object is equal to itself', () => {
      const object1 = { a: 1, b: 2 };
      const alsoObject1 = _;
      expect(object1).toEqual(alsoObject1);
    });
    it('two different objects are not strictly equal', () => {
      const object1 = { a: 1, b: 2 };
      const object2 = { a: 1, b: 2 };
      const areNotTheSameObject = _;
      expect(areNotTheSameObject).toEqual(true);
    });
    it('objects with the same values will pass', () => {
      const actual = { a: 1, b: 2 };
      const expected = _;
      expect(actual).toEqual(expected);
    });
    it('the order of key/value pairs is not important', () => {
      const actual = { a: 1, b: 2 };
      const expected = { b: 2, a: 1 };
      expect(actual)._(expected);
    });
  });
});
