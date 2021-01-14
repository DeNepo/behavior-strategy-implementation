'use strict';

// write an isEnthusiastic function to pass the tests

/**
 * checks if a string is enthusiastic
 * @param {string} str - string to check for "!"
 * @returns {boolean} if str contains "!" or not
 */
const isEnthusiastic = _ => {
  return _;
};

// this works!  no need to change it
const filter = (arr, callback) => {
  const filtered = [];
  for (let entry of arr) {
    const keepIt = callback(entry);
    if (keepIt) {
      filtered.push(entry);
    }
  }
  return filtered;
};

// an empty array returns an empty array
const _1_expect = [];
const _1_actual = filter([], isEnthusiastic);
const _1_test = deepCompare(_1_actual, _1_expect);
console.assert(_1_test, 'Test 1');

// filters everything when there are no enthusiastic strings
const _2_expect = [];
const _2_actual = filter(['', ':)', 'tree'], isEnthusiastic);
const _2_test = deepCompare(_2_actual, _2_expect);
console.assert(_2_test, 'Test 2');

// keeps everything when there are only enthusiastic strings
const _3_expect = ['! :(', 'hi!', '!?'];
const _3_actual = filter(['! :(', 'hi!', '!?'], isEnthusiastic);
const _3_test = deepCompare(_3_actual, _3_expect);
console.assert(_3_test, 'Test 3');

// works with a mixed array
const _4_expect = ['hi!', '!'];
const _4_actual = filter([':(', 'hi!', '!', ''], isEnthusiastic);
const _4_test = deepCompare(_4_actual, _4_expect);
console.assert(_4_test, 'Test 4');

// hoisted to keep it out of your way in the editor
// in one line so it's out of your way in JS Tutor

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));}
