// #todo

'use strict';

/**
 * converts two boolean values into a binary string
 *  true become "1", false becomes "0"
 * @param {boolean} [a=false] - the left value
 * @param {boolean} [b=false] - the right value
 * @returns {string}
 * @example
 *  // true, false --> '10'
 *  // false, false --> '00'
 *  // false, true --> '01'
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
  // this function only 4 possible combinations of arguments
  //  it's possible test them all and have 100% confidence in the function
  describe(solution.name + ': converts two booleans to binary', () => {
    it('true, true --> "11"', () => {
      const actual = solution(_, _);
      expect(actual).toEqual(_);
    });
    it('true, false --> "10"', () => {
      const actual = _;
      expect(actual).toEqual('10');
    });
    it('false, true --> "01"', () => {
      const actual = _;
      _;
    });
    it('_', () => {});
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(c = false, a = false) { if ("boolean" != typeof c) { throw new TypeError("a is not boolean"); } if ("boolean" != typeof a) { throw new TypeError("b is not boolean"); } let b = ""; return b += c ? "1" : "0", b += a ? "1" : "0", b }
