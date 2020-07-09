'use strict';

/**
 * determines if a string is curious or not
 * @param {string} str - the string to check for enthusiasm
 * @returns {boolean}
 */
const isCurious = (str) => str.includes('?');


// returns undefined if the array is empty
const _1_array = [];
const _1_expect = undefined;
const _1_test = _1_array.find(isCurious) === _1_expect;
console.assert(_1_test, 'Test 1');

// returns undefined if there are no curious strings
const _2_array = ['!', 'hoy', ':)'];
const _2_expect = undefined;
const _2_test = _2_array.find(isCurious) === _2_expect;
console.assert(_2_test, 'Test 2');

// finds the only curious string
const _3_array = ['huh', 'huh?', 'huh!'];
const _3_expect = 'huh?';
const _3_test = _3_array.find(isCurious) === _3_expect;
console.assert(_3_test, 'Test 3');

// finds the first curious string
const _4_array = ['huh', 'huh?', 'what?'];
const _4_expect = 'huh?';
const _4_test = _4_array.find(isCurious) === _4_expect;
console.assert(_4_test, 'Test 4');

