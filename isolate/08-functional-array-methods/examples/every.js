'use strict';

/**
 * checks if a value is falsy
 * @param {any} val
 * @returns {boolean}
 */
const isFalsy = (val) => {
  return !Boolean(val);
};


// an empty array returns true
const _1_arg = [];
const _1_expect = true;
const _1_test = _1_arg.every(isFalsy) === _1_expect;
console.assert(_1_test, 'Test 1');

// returns true when every entry is falsy
const _2_arg = ['', 0, null, undefined, false];
const _2_expect = true;
const _2_test = _2_arg.every(isFalsy) === _2_expect;
console.assert(_2_test, 'Test 2');

// returns false when all entries are truthy
const _3_arg = [true, 100, 'hello'];
const _3_expect = false;
const _3_test = _3_arg.every(isFalsy) === _3_expect;
console.assert(_3_test, 'Test 3');

// returns false if any entry is truthy
const _4_arg = ['', 0, 'hello', null, false];
const _4_expect = false;
const _4_test = _4_arg.every(isFalsy) === _4_expect;
console.assert(_4_test, 'Test 4');

