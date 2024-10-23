debugger;

/* ------ implicit returns ------

  if your arrow function contains only a single expression, you don't need to use a block or `return`
  this is not the case for `function`s, they always need the block and a return statement

*/

// the logic in this function is a single expression, we don't need the block or `return`
const arrowWithBlock = (a, b) => {
  return a + b;
};
// this will also work!
const arrowWithImplicitReturn = (a, b) => a + b;

// good
function add(a, b) {
  return a + b;
}
// syntax error
// function add(a, b)  a + b;

/* ------ arrow statements ------

  you can just write an arrow function as a statement
    but there is no way to use it!
    it will also not show up in the debugger
  it will take a step in execution, but it's not very useful

  it's not possible to write unnamed `function` statements:
    function () {}
    that will throw a syntax error

*/

() => {};

/*

  there are a few more differences between `function` and `() => {}`
  you will not need to understand these just yet:

  - `this`
  - `new`
  - `arugments`

  references:

  - https://betterprogramming.pub/difference-between-regular-functions-and-arrow-functions-f65639aba256

*/
