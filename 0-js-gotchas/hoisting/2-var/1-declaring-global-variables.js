debugger; /* hoisting happens during creation


  by the time you reach this debugger statement, creation phase is over and execution has begun

  JavaScript has already hoisted aDeclaredVariable to the global scope
    a property was added to the window object during creation phase
  but it has not yet assigned the value 'hoisted'
    that will happen when the assignment line is reached

  compare that to anUndeclaredVariable which will not have a window property until it is assigned

  (hint: scroll to the bottom of this script)

*/

debugger; /*

  variables declared with `var` and hoisted can be read at any time

  that is not the same for undeclared variables that are created by undeclared assignments

*/

console.log('aDeclaredVariable:', aDeclaredVariable);

try {
  console.log('anUndeclaredVariable:', anUndeclaredVariable);
} catch (err) {
  console.error(err);
}

debugger; /*

  hoisted (declared) variables can be assigned at any time
    so can undeclared variables

  after `var` is used in creation phase to declare a variable
    there is nothing special about the line where it was declared

*/

aDeclaredVariable = 'assigned before declaration line';

// this line will break in JS tutor!
anUndeclaredVariable = 'not hoisted: created by assignment';

var aDeclaredVariable = 'hoisted because of declaration with `var`';
