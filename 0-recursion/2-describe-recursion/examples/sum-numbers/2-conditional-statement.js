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
  //  |---- basecase ----|- turn-around -|
  if (nums.length === 0) return 0;
  //                | build-up  |   recursion    | break-down |
  else return nums[0] + sumNumbers(nums.slice(1));
};

console.log(sumNumbers([3, 2, 1]));
console.log(sumNumbers([1, 2, 3]));
console.log(sumNumbers([-1, 0, 1, 0, -1, 0, 1]));
console.log(sumNumbers([]));
