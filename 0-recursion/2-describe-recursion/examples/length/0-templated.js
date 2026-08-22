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
  const isBaseCase = strOrArr.length === 0; // must use argument(s)
  if (isBaseCase) {
    const turnAround = 0;
    return turnAround;
  } else {
    // reursive case
    const breakDown = strOrArr.slice(1); // must use argument(s)
    const recursion = length(breakDown);
    const buildUp = recursion + 1; // must use recursion
    return buildUp;
  }
};

console.log(length('')); // 0
console.log(length('azerty')); // 6
console.log(length([])); // 0
console.log(length([true, false, false, true])); // 4
