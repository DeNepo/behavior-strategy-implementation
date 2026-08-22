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
  return nums.length === 0 // basecase
    ? 0 // turn-around
    : nums[0] + sumNumbers(nums.slice(1)); // build-up, recursion, break-down
};

console.log(sumNumbers([3, 2, 1]));
console.log(sumNumbers([1, 2, 3]));
console.log(sumNumbers([-1, 0, 1, 0, -1, 0, 1]));
console.log(sumNumbers([]));
