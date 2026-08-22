'use strict';

/**
 * Calculates the length of an array or a string.
 * 
 * base case:         
 *    empty string/array  ->   0
 * recursive case: 
 *    non-empty str/arr   ->   ƒ(str/arr without first value) + 1
 */
const length = (strOrArr = '') => {
  //  |----- basecase -----|- turn-around -|
  if (strOrArr.length === 0) return 0;
  //                 |  rec   |   break-down   | bu |
  else return length(strOrArr.slice(1)) + 1;
};

console.log(length('')); // 0
console.log(length('azerty')); // 6
console.log(length([])); // 0
console.log(length([true, false, false, true])); // 4
