debugger; /* multiple `var`s

  you can declare the same variable multiple times without an error
  it will be hoisted once and the rest will be ignored
    none of the declarations will take a step of execution

*/

apple = 'pie';

var apple;

var apple = 'fruit';

var apple;

console.log(apple);
