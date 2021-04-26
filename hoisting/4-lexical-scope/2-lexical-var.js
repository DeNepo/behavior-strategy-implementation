debugger; /* lexical scope: hoisting `var`

  often you will need a variable only inside your function
  you can declare a variable with `var` and it is "scoped" to that function call
    you cannot access the variable outside of the function call

  each time you call the function:
    1. a new scope is created
    2. all `var` variables are hoisted inside the new scope (before the first step!)
    3. then the function begins to execute
  it's like creation & execution phases, but for a single function

  hint: try the ?variables button

*/

aNewScope('cheese');

function aNewScope(food) {
  // you can use this variable before it's declaration
  //  even if the declaration is unreachable
  //  because it was hoisted a creation!
  alert(yesOrNo);
  yesOrNo = confirm(food + ': yes or no?');
  alert(food + ': ' + yesOrNo);

  // block scopes don't matter for `var`!
  //  the variable is still hoisted in the function scope
  if (false) {
    // `var` declarations do not take a step of execution, they were hoisted!
    //    they happen during the scope's creation phase
    //    it does not matter if this line is reached or not
    //  PS. declaring variables at the bottom is a bad practice
    //    it makes your code harder to read
    //    there's a good reason let & const don't let you do this
    var yesOrNo = 'this value will never be assigned';
  }

  console.log(food, yesOrNo);
}

aNewScope('bread');
