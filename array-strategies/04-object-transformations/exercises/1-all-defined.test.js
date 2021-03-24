'use strict';

/**
 * determines if all the entries in an object are defined
 * @param {Object} obj - the object to check
 * @returns {boolean} - are all the entries defined?
 */
const allEntriesDefined = obj => {
  const objValues = Object._(obj);
  const allAreDefined = objValues.reduce((acc, next) => {
    return acc && next !== undefined;
  }, true);

  return allAreDefined;
};

describe('allEntriesDefined checks if all the entries in an object are defined', () => {
  describe('it returns true if there are no undefined entries', () => {
    it('returns true for an empty object', () => {
      const actual = allEntriesDefined({});
      expect(actual).toEqual(true);
    });
    it('works for small objects', () => {
      const actual = allEntriesDefined({ a: 1, b: 2 });
      expect(actual).toEqual(true);
    });
    it('works for large objects', () => {
      const arg = {
        a: 1,
        b: 2,
        c: 'hello',
        d: 'goodbye',
        e: true,
        f: false,
        g: null,
      };
      const actual = allEntriesDefined(arg);
      expect(actual).toEqual(true);
    });
  });
  describe('it returns false if there are undefined entries', () => {
    it('returns false for only undefined values', () => {
      const actual = allEntriesDefined({ a: undefined });
      expect(actual).toEqual(false);
    });
    it('returns false for all undefined values', () => {
      const arg = {
        a: undefined,
        b: undefined,
        c: undefined,
        d: undefined,
      };
      const actual = allEntriesDefined(arg);
      expect(actual).toEqual(false);
    });
    it('returns false for mixed values', () => {
      const arg = {
        a: undefined,
        b: 2,
        c: null,
        d: 'goodbye',
      };
      const actual = allEntriesDefined(arg);
      expect(actual).toEqual(false);
    });
  });

  describe('it uses the argument object correctly', () => {
    it('does not modify the argument', () => {
      const arg = { e: 'hello', f: undefined, g: 'goodbye' };
      allEntriesDefined(arg);
      expect(arg).toEqual({ e: 'hello', f: undefined, g: 'goodbye' });
    });
  });
});
