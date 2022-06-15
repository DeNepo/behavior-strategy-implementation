// #todo

'use strict';

/**
 * returns true if the value is truthy
 * returns false if the value is falsy
 * @param {any} value
 * @returns {boolean}
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
  /* Execution Paths
      when testing conditionals, you need to be test all paths
  */
  describe(solution.name + ': determines if a value is truthy', () => {
    describe('solution can identify truthy values', () => {
      it('non-empty strings -> true', () => {
        const actual = solution(_);
        expect(actual).toEqual(true);
      });
      it('numbers that are not 0 or NaN -> true', () => {
        const actual = _;
        expect(actual).toEqual(true);
      });
      it('true -> true', () => {
        expect(solution(_)).toEqual(true);
      });
    });
    describe('solution can identify falsy values', () => {
      it('"" -> flase', () => {
        _;
      });
      it('0 -> false', () => {
        _;
      });
      it('NaN -> false', () => {
        _;
      });
      it('false -> false', () => {
        _;
      });
      it('undefined -> false', () => {
        _;
      });
      it('null -> false', () => {
        _;
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(value) { return value ? true : false; }
