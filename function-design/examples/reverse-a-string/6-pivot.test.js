'use strict';

const expect = require('chai').expect;

/**
 * repeats a string a specific number of times
 * @param {string} [text=''] - the string to repeat. defaults to empty string
 * @param {number} [repetitions=1] - how many times to repeat. defaults to 1
 *  repetitions must be greater than zero, and must be an integer
 * @return {string} the text repeated as many times as repetitions
 */
const stub = (text = '', repetitions = 1) => {
  return '';
};

// --- trying iteration strategy ---

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

// --- trying a recursion strategy ---

/* not at all
  infinite recursion for repetitions === 0
  no recursion for repetitions > 0
*/
const recursionTry1 = (text = '', repetitions = 1) => {
  if (repetitions > 0) {
    return text; // base case: the text
  } else {
    const nextText = text + text; // build up the return value
    const nextRepetitions = repetitions - 1; // step down towards the base case
    return recursionTry1(nextText, nextRepetitions); // recurse!
  }
};

// no go - wrote extra tests for different lenghts
//  all lenghts return empty string
// ha!  i never combine the retruned recursion with the current text value
//  trying to fix this in recursionTry3
const recursionTry2 = (text = '', repetitions = 1) => {
  if (repetitions === 0) {
    return ''; // 0 repetitions should be an empty string
  } else {
    const nextText = text + text; // build up the return value
    const nextRepetitions = repetitions - 1; // step down towards the base case
    return recursionTry2(nextText, nextRepetitions); // recurse!
  }
};

// nope: repeats the text twice in each recursive call
//  once with nextText
//  and again just before returning
const recursionTry3 = (text = '', repetitions = 1) => {
  if (repetitions === 0) {
    return ''; // 0 repetitions should be an empty string
  } else {
    const nextText = text + text; // build up the return value
    const nextRepetitions = repetitions - 1; // step down towards the base case
    // combine the recursed value with text and return
    return text + recursionTry3(nextText, nextRepetitions);
  }
};

// success!
//  removed the extra repetition with nextText
const recursionTry4 = (text = '', repetitions = 1) => {
  if (repetitions === 0) {
    return ''; // 0 repetitions should be an empty string
  } else {
    const nextRepetitions = repetitions - 1; // step down towards the base case
    // combine the recursed value with text and return
    return text + recursionTry4(text, nextRepetitions);
  }
};

// oops, tried this already.  it was recursionTry2
//  wanted to see if i could combine the text before recursing
const recursionTry5 = (text = '', repetitions = 1) => {
  if (repetitions === 0) {
    return ''; // 0 repetitions should be an empty string
  } else {
    const nextText = text + text; // build up the return value
    const nextRepetitions = repetitions - 1; // step down towards the base case
    // combine the recursed value with text and return
    return recursionTry5(nextText, nextRepetitions);
  }
};

/*
  your notes go here
*/

for (const solution of [
  // secretSolution,
  // stub,
  // forLoopTry1,
  // forLoopTry2,
  // forLoopTry3, // success!
  // withoutExtraVariable,
  // recursionTry1,
  // recursionTry2,
  // recursionTry3,
  recursionTry4, // success!
  // recursionTry5,
]) {
  // the main test suite for the function
  describe(solution.name + ': repeating a string:', () => {
    describe('default parameters', () => {
      it('repeat once if no repetitions is passed', () => {
        expect(solution('asdf')).to.equal('asdf');
      });
      it('expect an empty string if no arguments are passed', () => {
        expect(solution()).to.equal('');
      });
    });
    describe('an empty string', () => {
      it('0 times', () => {
        expect(solution('', 0)).to.equal('');
      });
      it('10 times', () => {
        expect(solution('', 10)).to.equal('');
      });
      it('100 times', () => {
        expect(solution('', 100)).to.equal('');
      });
    });
    describe('zero repetitions', () => {
      it('"asdf"', () => {
        expect(solution('asdf', 0)).to.equal('');
      });
      it('"tommywalk"', () => {
        expect(solution('tommywalk', 0)).to.equal('');
      });
    });
    describe('standard use cases', () => {
      // added more test cases for clarity
      it('repeat a phrase 1 time', () => {
        expect(solution('.', 1)).to.equal('.');
      });
      it('repeat a phrase 2 times', () => {
        expect(solution('.', 2)).to.equal('..');
      });
      it('repeat a phrase 3 times', () => {
        expect(solution('go to school', 3)).to.equal(
          'go to schoolgo to schoolgo to school'
        );
      });
      it('repeat a phrase 4 times', () => {
        expect(solution('.', 4)).to.equal('....');
      });
      it('phrases with punctuation', () => {
        expect(solution('"Go!", said Dr. Seuss?', 2)).to.equal(
          '"Go!", said Dr. Seuss?"Go!", said Dr. Seuss?'
        );
      });
      it('special characters', () => {
        expect(solution('\\ \n \t s', 2)).to.equal('\\ \n \t s\\ \n \t s');
      });
    });
  });
}

// minified solution for testing your tests

// secret-solution.js

// prettier-ignore
function secretSolution(a = "", b = 1) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("number" != typeof b) { throw new TypeError("repetitions is not a number"); } if (0 > b) { throw new RangeError("repetitions is less than zero"); } if (!Number.isInteger(b)) { throw new RangeError("repetitions is not an integer"); } return Array(b).fill(a).join(""); }
