'use strict';

/**
 * creates a copy of the object with all falsy entries removed
 * @param {Object} obj - the object to filter
 * @returns {Object} - the filtered object
 */
const keepTruthyEntries = obj => {
  const objEntries = Object._(_);
  const truthyEntries = objEntries._(entry => {
    const value = _;
    return _;
  });
  const truthyObject = truthyEntries._((newObj, entry) => {
    const key = _;
    const value = _;
    _;
    return newObj;
  }, _);

  return truthyObject;
};

describe('keepTruthyEntries keeps all the truthy entries', () => {
  describe('it correctly filters the object', () => {
    it('returns an empty object for an empty object', () => {
      const actual = keepTruthyEntries({});
      expect(actual).toEqual({});
    });
    it('removes all entries when all are falsy', () => {
      const actual = keepTruthyEntries({
        a: 0,
        b: false,
        c: undefined,
        d: '',
        e: null,
      });
      expect(actual).toEqual({});
    });
    it('keeps all entries when they are truthy', () => {
      const actual = keepTruthyEntries({
        a: 1,
        b: true,
        c: 'hello',
      });
      expect(actual).toEqual({
        a: 1,
        b: true,
        c: 'hello',
      });
    });
    it('correctly filters a mixed object', () => {
      const arg = {
        a: 1,
        b: 0,
        c: 'hello',
        d: '',
        e: true,
        f: false,
        g: null,
      };
      const actual = keepTruthyEntries(arg);
      expect(actual).toEqual({
        a: 1,
        c: 'hello',
        e: true,
      });
    });
  });

  describe('it uses the argument object correctly', () => {
    it('does not modify the argument', () => {
      const arg = { e: 'hello', f: undefined, g: 'goodbye' };
      keepTruthyEntries(arg);
      expect(arg).toEqual({ e: 'hello', f: undefined, g: 'goodbye' });
    });
    it('returns a new object', () => {
      const arg = {};
      const returned = keepTruthyEntries(arg);
      const areNotTheSameObject = arg !== returned;
      expect(areNotTheSameObject).toEqual(true);
    });
  });
});
