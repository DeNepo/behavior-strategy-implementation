'use strict';

/* you may want to do multiple operations on the same data
  this is easy using multiple array methods in a row
  there are a few different ways to write this:
*/

// challenge: sum all numbery strings in this array
const array = ['1', '2', 'x', '', '-6'];
const expected = -3;

// callbacks: the logic used for each step
const castToNumber = (entry) => {
  return Number(entry);
};
const isNotNaN = (entry) => {
  return !Number.isNaN(entry);
};
const sumNumbers = (sum, next) => {
  return sum + next;
};


/* option 1: one variable per step with separated logic
  pros: easier to debug, each step is visible in debugger
      logic can be tested and reused
  cons: more code to read and write
*/
const _1a_mapped = array.map(castToNumber);
const _1b_filtered = _1a_mapped.filter(isNotNaN);
const _1c_reduced = _1b_filtered.reduce(sumNumbers);
const _1_test = _1c_reduced === expected;
console.assert(_1_test, 'Test option 1');


/* option 2: chained method calls with separated logic
  pros: reads almost like a paragraph
      logic can be tested and reused
  cons: harder to debug, no steps to inspect
*/
const _2_chainedSeparatedLogic = array
  .map(castToNumber)
  .filter(isNotNaN)
  .reduce(sumNumbers);
const _2_test = _2_chainedSeparatedLogic === expected;
console.assert(_2_test, 'Test option 2');


/* option 3: chained method calls with inline logic
  pros: even less code to read - logic is right there
  cons: harder to debug, no steps to inspect
      logic cannot be tested or reused
      callback logic can be harder to read than variable names
*/
const _3_chainedInlineLogic = array
  .map((entry) => {
    return Number(entry);
  })
  .filter((entry) => {
    return !Number.isNaN(entry);
  })
  .reduce((sum, next) => {
    return sum + next;
  });
const _3_test = _3_chainedInlineLogic === expected;
console.assert(_3_test, 'Test option 3');
