'use strict';

const assert = chai.assert;

/**
 * switches the key and value for each string entry in an object
 * @param {Object} obj - an object
 * @returns {Object} - the swapped object
 */
const swapem = (obj) => {

  const swapped = Object._(_)
    ._((entry) => {
      const key = _;
      const value = _;
      if (_) {
        _;
      } else {
        _;
      }
    })
    ._((newObj, entry) => {
      const key = _;
      const value = _;
      _;
      return _;
    }, _);

  return swapped;
};


describe('swapem switches the key and value for each entry', () => {

  describe("it correctly swaps the entries", () => {
    it('returns an empty object for an empty object', () => {
      const actual = swapem({});
      assert.deepStrictEqual(actual, {});
    });
    it('swaps all entries when all values are strings', () => {
      const actual = swapem({
        a: 'H',
        b: 'Y',
        c: 'F',
      });
      assert.deepStrictEqual(actual, {
        H: 'a',
        Y: 'b',
        F: 'c'
      });
    });
    it('swaps no entries when none are strings', () => {
      const actual = swapem({
        a: 1,
        b: true,
        c: null
      });
      assert.deepStrictEqual(actual, {
        a: 1,
        b: true,
        c: null
      });
    });
    it('only swaps string entries in a mixed object', () => {
      const arg = {
        a: 1,
        b: 0,
        c: 'hello',
        d: 'goodbye',
        e: true,
      };
      const actual = swapem(arg);
      assert.deepStrictEqual(actual, {
        a: 1,
        b: 0,
        hello: 'c',
        goodbye: 'd',
        e: true,
      });
    });
  });

  describe('it uses the argument object correctly', () => {
    it('does not modify the argument', () => {
      const arg = { e: 'hello', f: '', g: 'goodbye' };
      swapem(arg);
      assert.deepStrictEqual(arg, { e: 'hello', f: '', g: 'goodbye' });
    });
    it('returns a new object', () => {
      const arg = {};
      const returned = swapem(arg);
      assert.notStrictEqual(returned, arg);
    });
  });
});

