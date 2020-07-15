'use strict';

// it's conventional to declare dependencies at the top of a file
const deepCompare = (actual, expect) => actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || Reflect.ownKeys(actual).length === Reflect.ownKeys(expect).length && Reflect.ownKeys(expect).every((key) => deepCompare(actual[key], expect[key])));

const tables = ['wood', 'metal', 'plastic'];
const sofas = ['cotton', 'wool', 'pleather'];

// fill in the empty array to pass the tests
const test1 = deepCompare([_], sofas);
console.assert(test1, 'Test 1');

sofas[1] = 'plaid';

const test2 = deepCompare([_], tables);
console.assert(test2, 'Test 2');

const test3 = deepCompare([_], sofas);
console.assert(test3, 'Test 3');

tables.shift();

const test4 = deepCompare([_], tables);
console.assert(test4, 'Test 4');

