'use strict';

debugger; /*

  in strict mode, you cannot assign to undeclared variables.

  strict mode exists to help you write better JavaScript
  just because JS let's you do something doesn't mean it's a good idea

  many of the features of `var` can make your code harder to understand and debug, to name two:
  - assigning values to variables before they are declared (because of hoisting)
  - adding global variables without a declaration

  it's no coincidence that strict mode, `let` and `const` change how variables behave!

*/

try {
  undeclaredVariable = 'hello!';
} catch (err) {
  console.error(err);
}

/* references:

  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Undeclared_var
  - https://www.w3schools.com/js/js_strict.asp

*/
