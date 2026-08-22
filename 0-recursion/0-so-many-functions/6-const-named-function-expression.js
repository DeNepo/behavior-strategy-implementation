'use strict';

/* recursion with const and named function expression

    this is also a safe form of recursive function
    you can't reassign `recursing` so the function will always call itself

    now things get interesting, you have two options: 
        recursively call the variable name
        recursively call the function name
    both options are equally safe, which you choose is style or preference
    
    there is one gotcha to be aware of: 
        the function name is not available outside the function!
*/

try {
  console.log('--- recursively calling the variable name ---');

  const recursing = function innerName(n = 0) {
    if (n === 0) {
      console.log(n);
    } else {
      recursing(n - 1);
    }
  };

  recursing(2);
  recursing(1);
  recursing(0);

  innerName(2); // ReferenceError: innerName is not defined
} catch (err) {
  console.error(err);
}

try {
  console.log('--- recursively calling the function name ---');

  const recursing = function innerName(n = 0) {
    if (n === 0) {
      console.log(n);
    } else {
      innerName(n - 1);
    }
  };

  recursing(2);
  recursing(1);
  recursing(0);

  innerName(2); // ReferenceError: innerName is not defined
} catch (err) {
  console.error(err);
}
