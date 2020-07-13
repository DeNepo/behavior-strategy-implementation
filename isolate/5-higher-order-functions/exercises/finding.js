'use strict';

// write isCurious to pass the tests

/**
 * determines if a string is curious or not
 * @param {string} str - the string to check for enthusiasm
 * @returns {boolean}
 */
const isCurious = (_) => {
  return _;
};

// this works! no need to change it
const find = (arr, callback) => {
  let found;
  for (let entry of arr) {
    const isTheThing = callback(entry);
    if (isTheThing) {
      found = entry;
      break;
    }
  }
  return found;
};

// returns undefined if the array is empty
const _1_expect = undefined;
const _1_actual = find([], isCurious);
const _1_test = _1_actual === _1_expect;
console.assert(_1_test, 'Test 1');

// returns undefined if there are no curious strings
const _2_expect = undefined;
const _2_actual = find(['!', 'hoy', ':)'], isCurious);
const _2_test = _2_actual === _2_expect;
console.assert(_2_test, 'Test 2');

// finds the only curious string
const _3_expect = 'huh?';
const _3_actual = find(['huh', 'huh?', 'huh!'], isCurious);
const _3_test = _3_actual === _3_expect;
console.assert(_3_test, 'Test 3');

// finds the first curious string
const _4_expect = 'huh?';
const _4_actual = find(['huh', 'huh?', 'what?'], isCurious);
const _4_test = _4_actual === _4_expect;
console.assert(_4_test, 'Test 4');

