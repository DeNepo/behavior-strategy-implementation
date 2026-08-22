'use strict';

/* recursion with let and named function expression

    this can be either safe or risky, depending on which name you use for recursion!
        recursively calling the variable name is riskly
        recursively calling the function name is safe
    
    PS. the function name is still not available outside the function
*/

try {
  console.log('--- recursively calling the variable name ---');

  let recursing = function innerName(n = 0) {
    if (n === 0) {
      console.log(n);
    } else {
      recursing(n - 1);
    }
  };

  recursing(2);
  recursing(1);
  recursing(0);

  // the recursive call will reference the current value of `recursing`
  //  not the function that was originally assigned to `recursing`!
  const oldRecursing = recursing;
  recursing = null;

  oldRecursing(1); // TypeError: recursing is not a function
} catch (err) {
  console.error(err);
}

try {
  console.log('--- recursively calling the function name ---');

  let recursing = function innerName(n = 0) {
    if (n === 0) {
      console.log(n);
    } else {
      innerName(n - 1);
    }
  };

  recursing(2);
  recursing(1);
  recursing(0);

  // the recursive call will still use the "secret" inner name to reference itself
  // the inner name can't be changed from outside the function, so the recursion is safe
  const oldRecursing = recursing;
  recursing = null;

  oldRecursing(1); // no error!
} catch (err) {
  console.error(err);
}
