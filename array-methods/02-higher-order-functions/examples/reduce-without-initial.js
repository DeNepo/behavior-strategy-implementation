'use strict';
console.log('-- begin --');

/* reducing with a callback
  you might have noticed that these loops strategies are repetitive
  higher order functions will help you write more reusable code
*/

/**
 * executes the callback with each item of the array
 * combines each value in the array using your callback
 * does not modify the parameter
 * @param {Array} arr - an array of items to reduce
 * @param {Function} callback - how to reduce each item
 * @returns {Array} a new array with the reduceped items
 */
const reduce = (arr, callback) => {
  let accumulator = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    accumulator = callback(accumulator, currentValue, i);
  }
  return accumulator;
};

// -- sum an array of numbers --
const numbersArray = [1, 2, 3, 4];

const addNumbers = (sum, nextNumber) => {
  return sum + nextNumber;
};

const _1_expect = 10;
const _1_actual = reduce(numbersArray, addNumbers);
console.assert(_1_actual === _1_expect, 'Test 1: add numbers');

// -- multiply an array of numbers --
const multiplyNumbers = (product, nextNumber) => {
  return product * nextNumber;
};

const _2_expect = 24;
const _2_actual = reduce(numbersArray, multiplyNumbers);
console.assert(_2_actual === _2_expect, 'Test 2: multiply numbers');

// -- concatenate an array of strings --
const stringsArray = ['a', 'b', 'c'];

const concatenateStrings = (fullString, nextString) => {
  return `${fullString}-${nextString}`;
};

const _3_expect = 'a-b-c';
const _3_actual = reduce(stringsArray, concatenateStrings);
console.assert(_3_actual === _3_expect, 'Test 3: concatenate strings');

console.log('-- end --');
