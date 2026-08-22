'use strict';

/**
 * Calculates the length of an array or a string.
 * 
 * base case:         
 *    empty string/array  ->   0
 * recursive case: 
 *    non-empty str/arr   ->   ƒ(str/arr without first value) + 1
 */
const length = (strOrArr = '') =>
  //       base-case          | t-a |  rec.  |   break-down   | build-up |
  strOrArr.length === 0 ? 0 : length(strOrArr.slice(1)) + 1;

console.log(length('')); // 0
console.log(length('azerty')); // 6
console.log(length([])); // 0
console.log(length([true, false, false, true])); // 4
