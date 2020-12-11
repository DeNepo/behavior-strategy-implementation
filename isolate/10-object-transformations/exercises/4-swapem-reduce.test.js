'use strict';

const assert = require('chai').assert;

/**
 * switches the key and value for each string entry in an object
 * @param {Object} obj - an object
 * @returns {Object} - the swapped object
 */
const swapem = (obj) => {

  const objEntries = Object.entries(obj);
  const swappedEntries = objEntries
    .map((entry) => {
      const key = entry[0];
      const value = entry[1];

      if (typeof value === 'string') {
        return [value, key];
      } else {
        return [key, value];
      }
    })

  //console.log(swappedEntries);

  const swappedObj = swappedEntries
    .reduce((newObj, entry) => {
      const key = entry[0];
      const value = entry[1];
      newObj[key] = value;
      return newObj;
    }, {});


  return swappedObj;
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

