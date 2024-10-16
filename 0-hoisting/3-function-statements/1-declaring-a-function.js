debugger; /* declarations are hoisted

  a `function` will be hoisted to the global scope at creation phase
  the function value is available from the beginning
    take a second to look for `aDeclaredFunction` in the debugger
  this is different than `var` variables
    `var` variables are undefined until the first assignment line is executed

  you can call a function before or after where it was declared

*/

aDeclaredFunction();
aDeclaredFunction();

// function declarations do not take a step in execution
function aDeclaredFunction() {
  console.log('hello');
}

aDeclaredFunction();
aDeclaredFunction();

debugger; /* declarations are just variables

  there is nothing special about a global variable declared as a function

  you can reassign them to any value, but it's good to avoid doing so
    this can make it very hard to understand your code

*/

aDeclaredFunction = 'hello';

try {
  // it's no longer a function!
  aDeclaredFunction();
} catch (err) {
  console.error(err);
}

/* references:

  - Vishal: https://www.youtube.com/watch?v=ZmTNfVYlcOE
  - Dani: https://www.youtube.com/watch?v=ppMlvGMT2qE
  - Beau: https://www.youtube.com/watch?v=C1PZh_ea-7I
  - All Things JS: https://www.youtube.com/watch?v=a9nJeJV32oE
  - Erik: https://www.youtube.com/watch?v=HOIu3owCcZs

  (hint: ctr-click to open the links)
*/
