// #todo

'use strict';

/* 3. Design Cycles

  try to implement your strategy as many ways as possible
  this is a chance to explore all the language features of JS

  to get the most out of these exercises remember:
    there are no bad ideas
    take lots of notes
    fail a lot of tests!

*/

// =============== JSDoc description of the challenge ===============

/**
 * Repeats a string a specific number of times.
 *
 * @param {string} [text=''] - The string to repeat. defaults to empty string.
 * @param {number} [repetitions=1] - How many times to repeat. defaults to 1.
 *  Repetitions must be greater than zero, and must be an integer.
 * @return {string} The text repeated as many times as repetitions.
 */

// =============== your solutions will go here ===============

/* -- iteration: append the string to itself once for each repetition --

  1. create a new empty string to store the accumulated result
  2. iterate from zero the the number of repetitions
    a. add the text to the accumulator one more time
  return: the accumulated result

*/

/* failed all the tests - always returned undefined
  repeated is declared and returnd, but never modified
*/
const forLoopTry1 = (text = '', repetitions = 1) => {
  let repeated;
  for (let i = 0; i < repetitions; i++) {
    text += text;
  }
  return repeated;
};

/* failed all the tests
  repeated was initialized as undefined, so adding the text makes `undefinedtextext...`
*/
const forLoopTry2 = (text = '', repetitions = 1) => {
  // debugger;
  let repeated;
  for (let i = 0; i < repetitions; i++) {
    repeated += text;
  }
  return repeated;
};

// success! initializing repeated to empty string worked
const forLoopTry3 = (text = '', repetitions = 1) => {
  let repeated = '';
  for (let i = 0; i < repetitions; i++) {
    repeated += text;
  }
  return repeated;
};

// can I do this just by modifying the parameter?
//  i did that by accident in my first attempt, but it could work
/* nope: the text is repeated way too many times
  'asdf' -> 'asdfasdf' -> 'asdfasdfasdfasdf'
  it doubles with each time instead of being appended just once
*/
const withoutExtraVariable = (text = '', repetitions = 1) => {
  // debugger;
  for (let i = 0; i < repetitions; i++) {
    text += text;
  }
  return text;
};

// refactoring this strategy to a while loop
const whileLoop = (text = '', repetitions = 1) => {
  let repeated = '';
  let i = 0;
  while (i < repetitions) {
    repeated += text;
    i++;
  }
  return repeated;
};

// =============== a for-of loop to control which solution(s) are tested ===============

for (const solution of [
  // secretSolution,
  // forLoopTry1,
  // forLoopTry2,
  forLoopTry3, // success!
  // whileLoop, // success again
  // withoutExtraVariable,
]) {
  // =============== test cases for this challenge ===============

  describe(solution.name + ': repeating a string:', () => {
    describe('default parameters', () => {
      it('repeat once if no repetitions is passed', () => {
        expect(solution('asdf')).toEqual('asdf');
      });
      it('expect an empty string if no arguments are passed', () => {
        expect(solution()).toEqual('');
      });
    });
    describe('an empty string', () => {
      it('repeat an empty string 0 times -> ""', () => {
        expect(solution('', 0)).toEqual('');
      });
      it('repeat an empty string 10 times -> ""', () => {
        expect(solution('', 10)).toEqual('');
      });
      it('repeat an empty string 100 times -> ""', () => {
        expect(solution('', 100)).toEqual('');
      });
    });
    describe('zero repetitions', () => {
      it('repeat "asdf" 0 times -> ""', () => {
        expect(solution('asdf', 0)).toEqual('');
      });
      it('repeat "tommywalk" 0 times -> ""', () => {
        expect(solution('tommywalk', 0)).toEqual('');
      });
    });
    describe('standard use cases', () => {
      it('repeating a longer phrase 3 times', () => {
        expect(solution('go to school', 3)).toEqual(
          'go to schoolgo to schoolgo to school'
        );
      });
      it('repeating a phrase with punctuation', () => {
        expect(solution('"Go!", said Dr. Seuss?', 2)).toEqual(
          '"Go!", said Dr. Seuss?"Go!", said Dr. Seuss?'
        );
      });
      it('a string with special characters can be repeated', () => {
        expect(solution('\\ \n \t s', 2)).toEqual('\\ \n \t s\\ \n \t s');
      });
    });
  });
}

// =============== a minified solution you can use to test your test cases ===============

// prettier-ignore
function secretSolution(a = "", b = 1) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("number" != typeof b) { throw new TypeError("repetitions is not a number"); } if (0 > b) { throw new RangeError("repetitions is less than zero"); } if (!Number.isInteger(b)) { throw new RangeError("repetitions is not an integer"); } return Array(b).fill(a).join(""); }
