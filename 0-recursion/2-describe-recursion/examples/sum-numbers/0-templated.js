'use strict';

/**
 * Sum the numbers in an array.
 * 
 * base case:
 *    empty array       ->   0
 * recursive case:
 *    non-empty arr   ->   first num + ƒ(array without first num)
 */
const sumNumbers = (nums = []) => {
  const isBaseCase = nums.length === 0; // must use argument(s)
  if (isBaseCase) {
    const turnAround = 0;
    return turnAround;
  } else {
    // reursive case
    const breakDown = nums.slice(1); // must use argument(s)
    const recursion = sumNumbers(breakDown);
    const buildUp = nums[0] + recursion; // must use recursion
    return buildUp;
  }
};

console.log(sumNumbers([3, 2, 1]));
console.log(sumNumbers([1, 2, 3]));
console.log(sumNumbers([-1, 0, 1, 0, -1, 0, 1]));
console.log(sumNumbers([]));
