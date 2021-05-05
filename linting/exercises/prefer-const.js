/* https://eslint.org/docs/rules/prefer-const

  this rule means you should use `const` whenever possible
  variables that are never reassigned should be declared with `const`

  using `const` makes your code more clear for developers
  and allows the computer to optimize runtime efficiency

*/

let likesApples = confirm('do you like apples?');

let greeting = '';
if (likesApples) {
  greeting = 'hello, welcome to my apple garden';
} else {
  greeting = 'hello, welcome to my orange garden';
}

alert(greeting);
