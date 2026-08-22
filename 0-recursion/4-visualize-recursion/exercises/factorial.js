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
const factorial = (n = 0) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(6)); // 720
