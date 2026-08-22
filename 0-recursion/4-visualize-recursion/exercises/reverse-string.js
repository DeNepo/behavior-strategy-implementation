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
const reverseString = (str = '') => {
  if (str.length === 0) {
    return str;
  } else {
    return reverseString(str.slice(1)) + str[0];
  }
};

console.log(reverseString('asdf'));
console.log(reverseString('{-@-}'));
