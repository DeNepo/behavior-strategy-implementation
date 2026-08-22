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
const biggest = (nums = []) => {
  if (nums.length === 0) {
    return undefined;
  } else if (nums.length === 1) {
    return nums[0];
  } else {
    const biggestOfRest = biggest(nums.slice(1));
    return nums[0] > biggestOfRest ? nums[0] : biggestOfRest;
  }
};

console.log(biggest([])); // undefined
console.log(biggest([1, 2, 3])); // 3
console.log(biggest([6])); // 6
console.log(biggest([-6, 6, -7])); // 6
console.log(biggest([4, 3, 7, 2])); // 7
