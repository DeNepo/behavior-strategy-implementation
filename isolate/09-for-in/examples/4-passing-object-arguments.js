'use strict';

/* Passing Objects as Arguments

  Objects are reference-types just like arrays, careful of side-effects!
  you will need to use the same strategy that you used with objects:

  1. create a new object
  2. modify the new object

*/

const noSideEffect = (oldObject, targetKey, newValue) => {
  const newObject = {};
  for (let nextKey in oldObject) {
    const nextValue = oldObject[nextKey];
    newObject[nextKey] = nextValue;
  }
  newObject[targetKey] = newValue;
  return newObject;
};

const arg1 = { a: 1, b: 2, c: 3 };

// run the test once
const returned1 = noSideEffect(arg1, 'b', 4);
console.assert(returned1.b === 4, 'Test 1');

// this will pass because the argument was not modified
const arg1WasNotModified = deepCompare(arg1, { a: 1, b: 2, c: 3 });
console.assert(arg1WasNotModified, 'arg1 was not modified');

const yesSideEffect = (object, key, newValue) => {
  object[key] = newValue;
  return object;
};

const arg2 = { a: 1, b: 2, c: 3 };

// run the test once
const returned2 = yesSideEffect(arg1, 'b', 4);
console.assert(returned2.b === 4, 'Test 2');

// this will fail because the argument was modified
const arg2WasNotModified = deepCompare(arg2, { a: 1, b: 2, c: 3 });
console.assert(arg2WasNotModified, 'arg2 was not modified');

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));}
