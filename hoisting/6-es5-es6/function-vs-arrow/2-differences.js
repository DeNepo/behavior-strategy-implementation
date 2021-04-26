debugger; /* arrow statements

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
  - implicit return

  references:

  - https://betterprogramming.pub/difference-between-regular-functions-and-arrow-functions-f65639aba256

*/
