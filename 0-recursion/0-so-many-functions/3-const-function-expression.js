'use strict';

/* recursion with const and function expression

    this is also a safe form of recursive function
    you can't reassign `recursing` so the function will always call itself

    this is effectively the same as const with an arrow function
    you can chose between these options based on your style guide and preference
*/

const recursing = function (n = 0) {
  if (n === 0) {
    console.log(n);
  } else {
    recursing(n - 1);
  }
};

recursing(2);
recursing(1);
recursing(0);
