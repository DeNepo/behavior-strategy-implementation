"use strict";

describe("about expect", () => {
  describe("toStrictEqual: primitives", () => {
    // comparing primitives with toStrictEqual is the same as using Object.is
    // the name toStrictEqual is confusing because it makes you think of ===
    //  but it's not the same!  this will take some getting used to
    it("5, 5", () => {
      expect(5).toStrictEqual(5);
    });
    it('5, "5"', () => {
      expect(5).toStrictEqual("5");
    });
    it("true, true", () => {
      expect(true).toStrictEqual(true);
    });
    it("false, true", () => {
      expect(false).toStrictEqual(true);
    });
    it("NaN, NaN", () => {
      expect(NaN).toStrictEqual(NaN);
    });
    it("-0, +0", () => {
      expect(-0).toStrictEqual(+0);
    });
  });

  describe("toStrictEqual: deep comparing arrays and objects", () => {
    // the assertion method toStrictEqual is not the same as ===
    //  it will actually do a deep comparison of objects and arrays
    // this will check that they store the same values
    //  remember isolate/reference-vs-value?
    it("arrays with the same values", () => {
      expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
    });
    it("arrays with different values", () => {
      expect([1, "2", 3]).toStrictEqual([1, 2, 3]);
    });
    it("objects with the same key/value pairs", () => {
      expect({ a: 1, b: 2 }).toStrictEqual({ b: 2, a: 1 });
    });
    it("objects with different key/value pairs", () => {
      expect({ a: "x", b: 2 }).toStrictEqual({ b: 2, a: 1 });
    });
  });

  describe("toStrictEqual: testing references", () => {
    // to check if two arrays or objects share a reference
    //  you can assert a check with ===
    it("the same array in memory", () => {
      const arr1 = [1, 2, 3];
      const arr2 = arr1;
      const areTheSameArray = arr1 === arr2;
      expect(areTheSameArray).toStrictEqual(true);
    });
    it("different arrays in memory", () => {
      const arr1 = [1, 2, 3];
      const arr2 = [1, 2, 3];
      const areTheSameArray = arr1 === arr2;
      expect(areTheSameArray).toStrictEqual(false);
    });
    it("the same object in memory", () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = obj1;
      const areTheSameObject = obj1 === obj2;
      expect(areTheSameObject).toStrictEqual(true);
    });
    it("different objects in memory", () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { a: 1, b: 2 };
      const areTheSameObject = obj1 === obj2;
      expect(areTheSameObject).toStrictEqual(false);
    });
  });

  describe(".toThrowError", () => {
    // this assertion checks to make sure a function throws an error
    // you wont' need to know this unless you study /using-errors
    it("passing", () => {
      const throwsCorrectError = () => {
        throw Error("hello");
      };
      expect(throwsCorrectError).toThrowError(Error);
    });
    it("failing: wrong error", () => {
      const throwsWrongError = () => {
        throw TypeError("userName is not a string");
      };
      expect(throwsWrongError).toThrowError(Error);
    });
    it("failing: does not throw", () => {
      const doesNotThrow = () => {};
      expect(doesNotThrow).toThrowError(Error);
    });
  });
});
