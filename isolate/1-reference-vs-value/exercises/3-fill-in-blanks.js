'use strict';

// it's conventional to declare dependencies at the top of a file
const deepCompareArrays = (actual, expect) => actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompareArrays(actual[index], expect)));

const tables = ['wood', 'metal', 'plastic'];
const sofas = ['cotton', 'wool', 'pleather'];

// fill in the empty array to pass the tests
const test1 = deepCompareArrays([_], sofas);
console.assert(test1, 'Test 1');

sofas[1] = 'plaid';

const test2 = deepCompareArrays([_], tables);
console.assert(test2, 'Test 2');

const test3 = deepCompareArrays([_], sofas);
console.assert(test3, 'Test 3');

tables.shift();

const test4 = deepCompareArrays([_], tables);
console.assert(test4, 'Test 4');

