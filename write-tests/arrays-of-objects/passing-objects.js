'use strict';

const expect = chai.expect;

/**
 * returns a new array containing all passing objects
 * @param {Array.<Object>} arr - an array of objects to filer
 * @returns {Array.<Object>} a new array containing only passing objects
 */
const allPassingObjects = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('arr is not an array');
  }
  if (!arr.every(i => Object(i) === i)) {
    throw new TypeError('arr is not an array of objects');
  }

  const isPassing = (obj) => {
    return obj.pass === true;
  };
  const passingObjects = arr
    .filter((entry) => isPassing(entry));

  return passingObjects;
};

describe('allPassingObjects: filters out non-passing objects', () => {
  describe('allPassingObjects correctly filters an array', () => {
    it('an empty array returns an empty array', () => {
      const actual = allPassingObjects(_);
      expect(_).to.deep.equal(_);
    });
    it('keeps all entries when all are passing', () => {
      const actual = allPassingObjects([
        { pass: _ },
        { pass: _ }
      ]);
      expect(actual).to.deep.equal([
        { pass: true },
        { pass: true }
      ]);
    });
    it('removes all entries when all are not passing', () => {
      const actual = allPassingObjects([
        { pass: _ },
        { pass: _ }
      ]);
      expect(actual).to.deep.equal(_);
    });
    it('removes only not-passing entries', () => {
      const actual = allPassingObjects([
        { pass: true },
        { pass: false },
        { pass: true }
      ]);
      expect(actual).to.deep.equal([
        { _: _ },
        { _: _ }
      ]);
    });
    it('removes entries with a truthy, but not true, .pass value', () => {
      const actual = allPassingObjects([
        { pass: 100 },
        { pass: 'hello' },
        { _: _ }
      ]);
      expect(actual).to.deep.equal([
        { pass: true }
      ]);
    });
    it('removes entries with no .pass property', () => {
      const actual = allPassingObjects([
        { hello: _ },
        { bye: _ },
        { pass: _ },
        { passing: _ }
      ]);
      expect(actual)._.deep._([
        { pass: true }
      ]);
    });
  });
  describe('allPassingObjects does not modify the argument', () => {
    it('returns a new array', () => {
      const arg = [];
      const actual = allPassingObjects(arg);
      expect(actual)._.not._(arg);
    });
    it('does not modify the argument', () => {
      const arg = [
        { pass: true },
        { pass: false },
        { hello: 'good bye' }
      ];
      allPassingObjects(arg);
      expect(arg).to.deep.equal([
        { _: _ },
        { _: _ },
        { _: _ }
      ]);
    });
  });
  describe('allPassingObjects is type-safe', () => {
    it('throws a TypeError if argument is not an array', () => {
      const shouldThrow = () => allPassingObjects(_);
      expect(shouldThrow).to.throw(_, _);
    });
    it('throws a TypeError if arguments contains non-objects', () => {
      const shouldThrow = () => allPassingObjects(_);
      expect(shouldThrow).to.throw(_, _);
    });
  });
});
