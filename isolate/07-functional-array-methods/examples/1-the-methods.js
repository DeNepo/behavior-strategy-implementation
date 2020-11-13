'use strict';

/* array methods use callbacks
  you can write and test your logic as a separate function
  then trust the array methods to use it correctly
*/

/**
 * returns true if a value is falsy, false if it is truthy
 * @param {any} entry
 * @returns {boolean}
 */
const isFalsy = (entry) => {
  return !Boolean(entry);
};

// test isFalsy
const isFalsyTest1 = isFalsy(0) === true;
console.assert(isFalsyTest1, '0 is not truthy');

const isFalsyTest2 = isFalsy(1) === false;
console.assert(isFalsyTest2, '1 is not truthy');

const isFalsyTest3 = isFalsy('') === true;
console.assert(isFalsyTest3, '"" is not truthy');

const isFalsyTest4 = isFalsy('hi') === false;
console.assert(isFalsyTest4, '"hi" is truthy');



// use isFalsy to process this array with different methods
const _0_array = ['hi!', 0, 199, '', false, true];

// create a new array filled with the return values of isFalsy
const _1_mapped = _0_array.map(isFalsy);

// create a new array with only the falsy values
const _2_filtered = _0_array.filter(isFalsy);

// find the first falsy entry
const _3_found = _0_array.find(isFalsy);

// determine if every entry in the array is falsy
const _4_everyed = _0_array.every(isFalsy);
