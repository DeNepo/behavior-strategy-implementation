debugger; /* no block scope

  `var` variables are not block scoped
  when you declare them in a block, they are still global variables
    even if the condition never executes!

*/

if (true) {
  var a1 = 'this value will be assigned';
}

if (false) {
  var a2 = 'this value will NOT be assigned';
}
