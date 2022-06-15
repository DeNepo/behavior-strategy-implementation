// #todo

'use strict';

/* 4. More Strategies!

  After solving the challenge a few times with one strategy, try new strategies

  there is no real "end" to these exercises
    you could keep solving the same challenge in different ways for days
  move on to the next exercise when you feel comfortable with 2-3 strategiesdis

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

/* --- iterate while the final string length is too short ---

  1. declare new empty string
  2. calculate how long the final string should be
  3. iterate while new string is too short
    a. add the text to the accumulator
  return: the new string

*/

const iterateWhileTooShort = (text = '', repetitions = 1) => {
  let finalString = '';
  const finalLength = text.length * repetitions;
  while (finalString.length < finalLength) {
    finalString += text;
  }
  return finalString;
};

/* -- recursion --

  repeatString(text, repetitions)
    base-case: repetitions is 0
      return: the text
    recursive case: repetitions is more than 0
      1. add the text to the text
      2. subtract one from repetitions
      return: repeatString(combinedText, smallerRepetitions)

*/

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

/* -- recursion --

  repeatString(text, repetitions)
    base-case: repetitions is 0
      return: empty string
    recursive case: repetitions is more than 0
      1. add the text to the text
      2. subtract one from repetitions
      return: repeatString(combinedText, smallerRepetitions)

*/

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

/* -- recursion --

  repeatString(text, repetitions)
    base-case: repetitions is 0
      return: empty string
    recursive case: repetitions is more than 0
      combinedText <- text + text
      2. subtract one from repetitions
      return: text + repeatString(combinedText, smallerRepetitions)

*/

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

/* -- recursion --

  try just passing the text into the recursive call
  the problem was it was combined twice, once for nextText and once at return
  this strategy only adds the text together once in the else

  repeatString(text, repetitions)
    base-case: repetitions is 0
      return: empty string
    recursive case: repetitions is more than 0
      1. subtract one from repetitions
      return: text + repeatString(text, smallerRepetitions)

*/

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

// success again
const recursionTry4Ternary = (text = '', repetitions = 1) => {
  return repetitions === 0 ? '' : text + recursionTry4(text, repetitions - 1);
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

// =============== a for-of loop to control which solution(s) are tested ===============

for (const solution of [
  // secretSolution,
  // stub,
  // forLoopTry1,
  // forLoopTry2,
  // forLoopTry3, // success!
  // whileLoop, // success again
  // withoutExtraVariable,
  iterateWhileTooShort, // success
  // recursionTry1,
  // recursionTry2,
  // recursionTry3,
  recursionTry4, // success!
  // recursionTry4Ternary, // success again
  // recursionTry5,
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
