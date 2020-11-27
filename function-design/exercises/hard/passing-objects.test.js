'use strict';

const expect = require('chai').expect;

/**
 * returns a new array containing all passing objects
 *  passing objects have a property "pass" with the value true
 *  if an object does not have the entry "pass": true, it is not passing
 * @param {Array.<Object>} arr - an array of objects to filer
 * @returns {Array.<Object>} a new array containing only passing objects
 */
const stub = () => {};

for (const solution of [
  secretSolution,
  // stub,
]) {
  describe(solution.name + ': filters out non-passing objects', () => {
    describe('correctly filters an array', () => {
      it('an empty array returns an empty array', () => {
        const actual = allPassingObjects(_);
        expect(_).to.deep.equal(_);
      });
      it('keeps all entries when all are passing', () => {
        const actual = allPassingObjects([{ pass: _ }, { pass: _ }]);
        expect(actual).to.deep.equal([{ pass: true }, { pass: true }]);
      });
      it('removes all entries when all are not passing', () => {
        const actual = allPassingObjects([{ pass: _ }, { pass: _ }]);
        expect(actual).to.deep.equal(_);
      });
      it('removes only not-passing entries', () => {
        const actual = allPassingObjects([
          { pass: true },
          { pass: false },
          { pass: true },
        ]);
        expect(actual).to.deep.equal([{ _: _ }, { _: _ }]);
      });
      it('removes entries with a truthy, but not true, .pass value', () => {
        const actual = allPassingObjects([
          { pass: 100 },
          { pass: 'hello' },
          { _: _ },
        ]);
        expect(actual).to.deep.equal([{ pass: true }]);
      });
      it('removes entries with no .pass property', () => {
        const actual = allPassingObjects([
          { hello: _ },
          { bye: _ },
          { pass: _ },
          { passing: _ },
        ]);
        expect(actual)._.deep._([{ pass: true }]);
      });
    });
    describe('does not modify the argument', () => {
      it('returns a new array', () => {
        const arg = [];
        const actual = allPassingObjects(arg);
        expect(actual)._.not._(arg);
      });
      it('does not modify the argument', () => {
        const arg = [{ pass: true }, { pass: false }, { hello: 'good bye' }];
        allPassingObjects(arg);
        expect(arg).to.deep.equal([{ _: _ }, { _: _ }, { _: _ }]);
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arr is not an array"); } if (!a.every(a => Object(a) === a)) { throw new TypeError("arr is not an array of objects"); } const b = a.filter(a => !0 === a.pass); return b }
