'use strict';

/* recursion with function declarations

    this is a risky form of recursive function
    if you reassign `recursing`, the function will no longer call itself

    careful!  this kind of function is also hoisted 
    which isn't a reason to avoid it, just something to be aware of
*/

function recursing(n = 0) {
  if (n === 0) {
    console.log(n);
  } else {
    recursing(n - 1);
  }
}

recursing(2);
recursing(1);
recursing(0);

// the recursive call will reference the current value of `recursing`
//  not the function that was originally assigned to it !
const oldRecursing = recursing;
recursing = null;

oldRecursing(1); // TypeError: recursing is not a function
