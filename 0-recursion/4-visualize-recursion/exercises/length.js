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
const length = (strOrArr = '') => {
  if (strOrArr.length === 0) {
    return 0;
  } else {
    return 1 + length(strOrArr.slice(1));
  }
};

console.log(length('')); // 0
console.log(length('azerty')); // 6
console.log(length([])); // 0
console.log(length([true, false, false, true])); // 4
