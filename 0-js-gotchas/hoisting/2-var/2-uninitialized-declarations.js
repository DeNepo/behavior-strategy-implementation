debugger; /*

  uninitialized `var` declarations do not take a step of execution
  this is because they were already declared in creation phase (hoisted)

  initialized `var` declarations will take a step of execution
  this is because of the assignment, not the declaration!

*/

var a1;

a1 = 'hello!';

var a2 = 'good bye';
