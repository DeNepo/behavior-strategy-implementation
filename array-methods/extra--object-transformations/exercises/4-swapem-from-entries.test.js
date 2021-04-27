'use strict';

/**
 * switches the key and value for each string entry in an object
 * @param {Object} obj - an object
 * @returns {Object} - the swapped object
 */
const swapem = obj => {
  const objEntries = Object._(_);
  const swappedEntries = objEntries.map(entry => {
    const key = _;
    const value = _;
    if (_) {
      return [_, _];
    } else {
      return [_, _];
    }
  });
  const swapped = Object._(_);

  return swapped;
};

describe('swapem switches the key and value for each entry', () => {
  describe('it correctly swaps the entries', () => {
    it('returns an empty object for an empty object', () => {
      const actual = swapem({});
      expect(actual).toEqual({});
    });
    it('swaps all entries when all values are strings', () => {
      const actual = swapem({
        a: 'H',
        b: 'Y',
        c: 'F',
      });
      expect(actual).toEqual({
        H: 'a',
        Y: 'b',
        F: 'c',
      });
    });
    it('swaps no entries when none are strings', () => {
      const actual = swapem({
        a: 1,
        b: true,
        c: null,
      });
      expect(actual).toEqual({
        a: 1,
        b: true,
        c: null,
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
      expect(actual).toEqual({
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
      expect(arg).toEqual({ e: 'hello', f: '', g: 'goodbye' });
    });
    it('returns a new object', () => {
      const arg = {};
      const returned = swapem(arg);
      const areNotTheSameObject = arg !== returned;
      expect(areNotTheSameObject).toEqual(true);
    });
  });
});
