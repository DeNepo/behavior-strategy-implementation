# So Many Functions!

JavaScript has too many ways to create a function. This folder is a quick guide to what you need know about using each one recursively.

TLDR; _Always declare recursive functions with `const`_:

```js
// these are all safe ways to declare recursive functions
// the recursive call will always reference the same function

// const + arrow function with implicit return
const constArrowImplicit = () => constArrowImplicit();

// const + arrow function with a block and explicit return
const constArrowBlock = () => {
  return constArrowBlock();
};

// const + anonymous function expression
const functionExpression = function () {
  return functionExpression();
};

// const + named function expression, recursively calling the variable name
const namedFunctionExpression = function innerName() {
  return namedFunctionExpression();
};

// const + named function expression, recursively calling the inner function name
const namedFunctionExpression = function innerName() {
  return innerName();
};
```
