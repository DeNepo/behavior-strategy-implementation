'use strict';

/**
 * creates a new object with all private entries removed
 *  by convention, private keys begin with an underscore
 *  public keys do not
 * @param {Object} obj - the object to filter
 * @returns {Object} - a new object with only the public keys
 * @example
 * const user = {
 *  _password: 'private',
 *  userName: 'public'
 * };
 *
 * const secureUser = removePrivateKeys(user);
 *
 * expect(secureUser).toEqual({
 *  userName: 'public'
 * });
 */
const removePrivateKeys = obj => {
  const objKeys = Object._(obj);
  const filteredKeys = objKeys._(key => {
    return _;
  });
  const secureObj = filteredKeys._((newObj, nextKey) => {
    newObj[_] = obj[_];
    return newObj;
  }, {});

  return secureObj;
};

describe('removePrivateKeys removes all entries beginning with an underscore', () => {
  describe('correctly filters the object', () => {
    it('returns an empty object for an empty object', () => {
      const actual = removePrivateKeys({});
      expect(actual).toEqual({});
    });
    it('removes all entries if all keys are private', () => {
      const actual = removePrivateKeys({
        _a: 1,
        _b: 2,
        _c: 3,
      });
      expect(actual).toEqual({});
    });
    it('removes no keys if all keys are public', () => {
      const arg = {
        a: 1,
        b: 2,
        c: 3,
      };
      const actual = removePrivateKeys(arg);
      expect(actual).toEqual({
        a: 1,
        b: 2,
        c: 3,
      });
    });
    it('removes only the private keys in mixed objects', () => {
      const arg = {
        a: 1,
        _b: 2,
        _c: 3,
        d: 4,
      };
      const actual = removePrivateKeys(arg);
      expect(actual).toEqual({
        a: 1,
        d: 4,
      });
    });
  });

  describe('it uses the argument object correctly', () => {
    it('does not modify the argument', () => {
      const arg = { e: 'hello', f: undefined, g: 'goodbye' };
      removePrivateKeys(arg);
      expect(arg).toEqual({ e: 'hello', f: undefined, g: 'goodbye' });
    });
    it('returns a new object', () => {
      const arg = {};
      const returned = removePrivateKeys(arg);
      const areNotTheSameObject = arg !== returned;
      expect(areNotTheSameObject).toEqual(true);
    });
  });
});
