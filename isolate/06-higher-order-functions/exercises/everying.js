'use strict';

// write an isFalsy function to pass the tests

/**
 * checks if a value is falsy
 *  returns true if the value is falsy
 *  returns false if it's truthy
 * @param {any} val
 * @returns {boolean}
 */
const isFalsy = (_) => {

};


// this works!  no need to change it
const every = (arr, callback) => {
  let allAreFalsy = true;
  for (let entry of arr) {
    const isFalsyValue = callback(entry);
    allAreFalsy = isFalsyValue && allAreFalsy;
  }
  return allAreFalsy;
};


// an empty array returns true
const _1_expect = true;
const _1_actual = every([], isFalsy);
const _1_test = _1_actual === _1_expect;
console.assert(_1_test, 'Test 1');

// returns true when every entry is falsy
const _2_expect = true;
const _2_actual = every(['', 0, null, undefined, false], isFalsy);
const _2_test = _2_actual === _2_expect;
console.assert(_2_test, 'Test 2');

// returns false when all entries are truthy
const _3_expect = false;
const _3_actual = every([true, 100, 'hello'], isFalsy);
const _3_test = _3_actual === _3_expect;
console.assert(_3_test, 'Test 3');

// returns false if any entry is truthy
const _4_expect = false;
const _4_actual = every(['', 0, 'hello', null, false], isFalsy);
const _4_test = _4_actual === _4_expect;
console.assert(_4_test, 'Test 4');

