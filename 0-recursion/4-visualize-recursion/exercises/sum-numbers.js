'use strict';

/* visualize recursion

  visualize strategy with ...
  - the [trace] button in study lenses
  - https://visualgo.net/en/recursion 
    paste your function body into the template function
    write your arguments as default parameters
  - https://quanticdev.com/tools/recursion-visualization
    paste your function body into the template function
    write your arguments in the function call at the bottom left

  visualize implementation with ...
  - JS Tutor
  - your browser's debugger -> watch the call stack section!

*/

/**
 *
 *
 */
const sumNumbers = (nums = []) => {
  if (nums.length === 0) {
    return 0;
  } else {
    return nums[0] + sumNumbers(nums.slice(1));
  }
};

console.log(sumNumbers([3, 2, 1])); // 6
console.log(sumNumbers([1, 2, 3])); // 6
console.log(sumNumbers([-1, 0, 1, 0, -1, 0, 1])); // 0
console.log(sumNumbers([])); // 0
