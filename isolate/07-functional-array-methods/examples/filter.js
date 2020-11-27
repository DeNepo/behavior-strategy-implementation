'use strict';

/**
 * checks if a string is enthusiastic
 * @param {string} str - string to check for "!"
 * @returns {boolean} if str contains "!" or not
 */
const isEnthusiastic = str => {
  return str.includes('!');
};

// an empty array returns an empty array
const _1_arg = [];
const _1_expect = [];
const _1_test = deepCompare(_1_arg.filter(isEnthusiastic), _1_expect);
console.assert(_1_test, 'Test 1');

// filters everything when there are no enthusiastic strings
const _2_arg = ['', ':)', 'tree'];
const _2_expect = [];
const _2_test = deepCompare(_2_arg.filter(isEnthusiastic), _2_expect);
console.assert(_2_test, 'Test 2');

// keeps everything when there are only enthusiastic strings
const _3_arg = ['! :(', 'hi!', '!?'];
const _3_expect = ['! :(', 'hi!', '!?'];
const _3_test = deepCompare(_3_arg.filter(isEnthusiastic), _3_expect);
console.assert(_3_test, 'Test 3');

// works with a mixed array
const _4_arg = [':(', 'hi!', '!', ''];
const _4_expect = ['hi!', '!'];
const _4_test = deepCompare(_4_arg.filter(isEnthusiastic), _4_expect);
console.assert(_4_test, 'Test 4');

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));}
