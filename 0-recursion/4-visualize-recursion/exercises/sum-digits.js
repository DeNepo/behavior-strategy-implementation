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
const sumDigits = (n = 0) => {
  if (n < 10) {
    return n;
  } else {
    return (n % 10) + sumDigits(Math.floor(n / 10));
  }
};

console.log(sumDigits(4)); // 4
console.log(sumDigits(21)); // 3
console.log(sumDigits(12)); // 3
console.log(sumDigits(6)); // 6
console.log(sumDigits(312)); // 6
console.log(sumDigits(10000)); // 1
