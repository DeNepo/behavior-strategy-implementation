debugger; /* `function` vs. `() => {}`

  `() => {}` are very similar to unnamed `function` expressions

  you're encouraged to always use `const` and expressions:
    - you can avoid hoisting
    - your functions will never be reassigned
    - inner and outer names will be the same (compared to named expressions)

  using `() => {}` is a little better because they will help you avoid some tricky mistakes

*/

const arrowExpression = () => {
  console.log('arrow expression');
};
console.log(arrowExpression.name);
arrowExpression();

const functionExpression = function () {
  console.log('function expression');
};
console.log(functionExpression.name);
functionExpression();
