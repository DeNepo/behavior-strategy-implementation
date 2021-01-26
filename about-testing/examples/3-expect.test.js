'use strict';

describe('about expect', () => {
  describe('strict equality : ===', () => {
    it('passing', () => {
      expect(true).toBe(true);
    });
    it('failing', () => {
      expect(true).toBe(false);
    });
  });

  describe('.to : for readability', () => {
    // you can add .to. in your tests to make it more readable
    // this won't change how the test works
    it('passing', () => {
      expect(true).toBe(true);
    });
    it('failing', () => {
      expect(true).toBe(false);
    });
  });

  describe('deep equality', () => {
    // to compare arrays and objects you will need .deep
    // this will check that they store the same values
    //  remember isolate/reference-vs-value?
    it('passing array', () => {
      expect([1, 2, 3]).toEqual([1, 2, 3]);
    });
    it('failing array', () => {
      expect([1, '2', 3]).toEqual([1, 2, 3]);
    });
    it('passing object', () => {
      expect({ a: 1, b: 2 }).toEqual({ b: 2, a: 1 });
    });
    it('failing object', () => {
      expect({ a: 'x', b: 2 }).toEqual({ b: 2, a: 1 });
    });
  });

  describe('.throw', () => {
    // this assertion checks to make sure a function throws an error
    // you wont' need to know this unless you study /using-errors
    it('passing', () => {
      const throwsCorrectError = () => {
        throw Error('hello');
      };
      expect(throwsCorrectError).toThrowError(Error);
    });
    it('failing: wrong error', () => {
      const throwsWrongError = () => {
        throw TypeError('userName is not a string');
      };
      expect(throwsWrongError).toThrowError(Error);
    });
    it('failing: does not throw', () => {
      const doesNotThrow = () => {};
      expect(doesNotThrow).toThrowError(Error);
    });
  });
});
