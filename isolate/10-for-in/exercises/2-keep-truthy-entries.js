'use strict';

const assert = chai.assert;

/**
 * creates a copy of the object with all falsy entries removed
 * @param {Object} obj - the object to filter
 * @returns {Object} - the filtered object
 */
const keepTruthyEntries = (obj) => {

  let onlyTruthyEntries = _;
  for (const _ in _) {
    const value = _;
    if (_) {
      _[_] = _;
    }
  }

  return onlyTruthyEntries;
};


describe('keepTruthyEntries keeps all the truthy entries', () => {

  describe("it correctly filters the object", () => {
    it('returns an empty object for an empty object', () => {
      const actual = keepTruthyEntries({});
      assert.deepStrictEqual(actual, {});
    });
    it('removes all entries when all are falsy', () => {
      const actual = keepTruthyEntries({
        a: 0,
        b: false,
        c: undefined,
        d: '',
        e: null
      });
      assert.deepStrictEqual(actual, {});
    });
    it('keeps all entries when they are truthy', () => {
      const actual = keepTruthyEntries({
        a: 1,
        b: true,
        c: 'hello'
      });
      assert.deepStrictEqual(actual, {
        a: 1,
        b: true,
        c: 'hello'
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
        g: null
      };
      const actual = keepTruthyEntries(arg);
      assert.deepStrictEqual(actual, {
        a: 1,
        c: 'hello',
        e: true
      });
    });
  });

  describe('it uses the argument object correctly', () => {
    it('does not modify the argument', () => {
      const arg = { e: 'hello', f: undefined, g: 'goodbye' };
      keepTruthyEntries(arg);
      assert.deepStrictEqual(arg, { e: 'hello', f: undefined, g: 'goodbye' });
    });
    it('returns a new object', () => {
      const arg = {};
      const returned = keepTruthyEntries(arg);
      assert.notStrictEqual(returned, arg);
    });
  });
});

