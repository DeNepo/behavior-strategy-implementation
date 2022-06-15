// #todo

'use strict';

/**
 * returns a description of how similar two values are
 *  if they are strictly equal -> 'strictly equal'
 *  if they have the same type -> 'same type'
 *  else -> 'totally different'
 * @param {any} val1
 * @param {any} val2
 * @returns {string} the values' solution
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
  describe(solution.name + ': determines how similar two values are', () => {
    describe('when values are strictly equal', () => {
      it('two identical strings -> "strictly equal"', () => {
        expect(solution('hello', 'hello')).toEqual(_);
      });
      it('two identical numbers -> "strictly equal"', () => {
        // 1, 1.0
      });
      it('two identical booleans -> "strictly equal"', () => {});
    });
    describe('when values have the same type', () => {
      it('two different strings -> "same type"', () => {
        expect(_).toEqual('same type');
      });
      it('two different numbers -> "same type"', () => {
        expect(_).toEqual(_);
      });
      it('two different booleans -> "same type"', () => {});
    });
    describe('when values are nothing alike', () => {
      it('values that are obviously different', () => {
        _(_(null, 4))._(_);
      });
      it('values that can be confusing', () => {
        // "4" and 4
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a, b) { let c = ""; return c = a === b ? "strictly equal" : typeof a == typeof b ? "same type" : "totally different", c }
