'use strict';

/**
 * determines if a string is curious or not
 * @param {string} str - the string to check for enthusiasm
 * @returns {boolean}
 */
const isCurious = str => {
  return str.includes('?');
};

// returns undefined if the array is empty
const _1_arg = [];
const _1_expect = undefined;
const _1_test = _1_arg.find(isCurious) === _1_expect;
console.assert(_1_test, 'Test 1');

// returns undefined if there are no curious strings
const _2_arg = ['!', 'hoy', ':)'];
const _2_expect = undefined;
const _2_test = _2_arg.find(isCurious) === _2_expect;
console.assert(_2_test, 'Test 2');

// finds the only curious string
const _3_arg = ['huh', 'huh?', 'huh!'];
const _3_expect = 'huh?';
const _3_test = _3_arg.find(isCurious) === _3_expect;
console.assert(_3_test, 'Test 3');

// finds the first curious string
const _4_arg = ['huh', 'huh?', 'what?'];
const _4_expect = 'huh?';
const _4_test = _4_arg.find(isCurious) === _4_expect;
console.assert(_4_test, 'Test 4');
