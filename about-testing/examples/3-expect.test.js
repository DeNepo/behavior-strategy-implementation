'use strict';

/* expect(received).toEqual(expected)

  expect(_).toEqual(_) is a very common syntax for assertions in JS
  if the assertion is true, nothing happens
  if the assertion is false, an error is thrown

*/

// nothing happens
expect(3).toEqual(3);

try {
  // an error is thrown
  expect(3).toEqual(4);
} catch (err) {
  console.log(err);
}

describe('about expect', () => {
  describe('toEqual: primitives', () => {
    // comparing primitives with toEqual is the same as using Object.is
    // the name toEqual is confusing because it makes you think of ===
    //  but it's not the same!  this will take some getting used to
    it('5, 5', () => {
      expect(5).toEqual(5);
    });
    it('5, "5"', () => {
      expect(5).toEqual('5');
    });
    it('true, true', () => {
      expect(true).toEqual(true);
    });
    it('false, true', () => {
      expect(false).toEqual(true);
    });
    it('NaN, NaN', () => {
      expect(NaN).toEqual(NaN);
    });
    it('-0, +0', () => {
      expect(-0).toEqual(+0);
    });
  });

  describe('toEqual: deep comparing arrays and objects', () => {
    // the assertion method toEqual is not the same as ===
    //  it will actually do a deep comparison of objects and arrays
    // this will check that they store the same values
    //  remember isolate/reference-vs-value?
    it('arrays with the same values', () => {
      expect([1, 2, 3]).toEqual([1, 2, 3]);
    });
    it('arrays with different values', () => {
      expect([1, '2', 3]).toEqual([1, 2, 3]);
    });
    it('objects with the same key/value pairs', () => {
      expect({ a: 1, b: 2 }).toEqual({ b: 2, a: 1 });
    });
    it('objects with different key/value pairs', () => {
      expect({ a: 'x', b: 2 }).toEqual({ b: 2, a: 1 });
    });
  });

  describe('toEqual: testing references', () => {
    // to check if two arrays or objects share a reference
    //  you can assert a check with ===
    it('the same array in memory', () => {
      const arr1 = [1, 2, 3];
      const arr2 = arr1;
      const areTheSameArray = arr1 === arr2;
      expect(areTheSameArray).toEqual(true);
    });
    it('different arrays in memory', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [1, 2, 3];
      const areTheSameArray = arr1 === arr2;
      expect(areTheSameArray).toEqual(false);
    });
    it('the same object in memory', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = obj1;
      const areTheSameObject = obj1 === obj2;
      expect(areTheSameObject).toEqual(true);
    });
    it('different objects in memory', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { a: 1, b: 2 };
      const areTheSameObject = obj1 === obj2;
      expect(areTheSameObject).toEqual(false);
    });
  });
});
