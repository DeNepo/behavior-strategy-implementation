'use strict';

/* recursion with const and arrow function

    this is a safe form of recursive function
    you can't reassign `recursing` so the function will always call itself
*/

const recursing = (n = 0) => {
  if (n === 0) {
    console.log(n);
  } else {
    recursing(n - 1);
  }
};

recursing(2);
recursing(1);
recursing(0);

// using an arrow function with implicit return for recursion is the same as with a block
// so we won't include this kind of function for the rest of these examples, KISS
const implicitReturn = (n = 0) =>
  n === 0 ? console.log(n) : implicitReturn(n - 1);
