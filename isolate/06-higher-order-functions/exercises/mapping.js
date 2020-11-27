'use strict';

// write truthiness to pass the tests

/**
 * converts a value to it's truthiness
 * @param {any} val - the value to convert
 * @returns {string} "truey" or "falsey"
 */
const truthiness = _ => {
  return _;
};

// this works! no need to change it
const map = (arr, callback) => {
  const mappedEntries = [];
  for (let entry of arr) {
    const mapped = callback(entry);
    mappedEntries.push(mapped);
  }
  return mappedEntries;
};

// returns an empty array for an empty array
const _1_expect = [];
const _1_actual = map([], truthiness);
const _1_test = deepCompare(_1_actual, _1_expect);
console.assert(_1_test, 'Test 1');

// works when all values are truthy
const _2_expect = ['truey', 'truey', 'truey'];
const _2_actual = map([100, 'hello', true], truthiness);
const _2_test = deepCompare(_2_actual, _2_expect);
console.assert(_2_test, 'Test 2');

// works when all values are falsy
const _3_expect = ['falsey', 'falsey', 'falsey', 'falsey'];
const _3_actual = map(['', 0, NaN, null], truthiness);
const _3_test = deepCompare(_3_actual, _3_expect);
console.assert(_3_test, 'Test 3');

// works when there are mixed values
const _4_expect = ['truey', 'falsey', 'falsey', 'truey'];
const _4_actual = map([true, 0, NaN, 'hello'], truthiness);
const _4_test = deepCompare(_4_actual, _4_expect);
console.assert(_4_test, 'Test 4');

// hoisted to keep it out of your way in the editor
// in one line so it's out of your way in JS Tutor

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));}
