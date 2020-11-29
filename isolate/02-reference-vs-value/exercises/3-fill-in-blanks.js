'use strict';

const tables = ['wood', 'metal', 'plastic'];
const sofas = ['cotton', 'wool', 'pleather'];

// fill in the empty array to pass the tests
const test1 = deepCompare(['cotton', 'wool', 'pleather'], sofas);
console.assert(test1, 'Test 1');

sofas[1] = 'plaid';

const test2 = deepCompare(['wood', 'metal', 'plastic'], tables);
console.assert(test2, 'Test 2');

const test3 = deepCompare(['cotton', 'plaid', 'pleather'], sofas);
console.assert(test3, 'Test 3');

tables.shift();

const test4 = deepCompare(['metal', 'plastic'], tables);
console.assert(test4, 'Test 4');

// you don't need to understand this code
// hoisted, to keep it out of your way
// prettier-ignore
function deepCompare(actual, expect) {
  // are they the same thing?
  return actual === expect || Object.is(actual, expect)
    // compare arrays
    || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))
      // compare objects
      || Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));
}
