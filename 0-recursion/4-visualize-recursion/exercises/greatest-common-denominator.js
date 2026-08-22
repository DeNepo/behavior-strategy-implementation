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
const greatestCommonDenominator = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return greatestCommonDenominator(b, a % b);
  }
};

console.log(greatestCommonDenominator(0, 12)); // 12
console.log(greatestCommonDenominator(12, 0)); // 12
console.log(greatestCommonDenominator(12, 6)); // 6
console.log(greatestCommonDenominator(6, 3)); // 3
console.log(greatestCommonDenominator(5, 6)); // 1
