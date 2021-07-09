debugger; /* multiple declarations

  you will often see many `var` declarations at the top of a file
  this is used to show the developer all variables that will be used in a file
    these variables will all be hoisted

  sometimes variables are initialized on the same line they're declared, often they are not
  this does not matter to JavaScript
    JS only really cares about initializations with `const`
  but declaring initial values can help developers understand your variables

*/

// all these variables are hoisted in one declaration
//  then assigned when the line is reached
var a1 = 'hello', // a step of execution
  a2 = 'good bye', // a step of execution
  a3; // not a step

console.log(a1);

a3 = 'I am confused';

console.log(a3);

console.log(a2);
