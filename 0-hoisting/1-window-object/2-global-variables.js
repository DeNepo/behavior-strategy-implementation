/* disclaimer!

  you should never use what you are learning in this file
  it's only here to help you understand JavaScript

  understand how this works will help to avoid bad habits

*/

debugger; /*

  there are two ways to create new global variables:

  - assigning to an undeclared variable
  - adding a new property to the window object

  check out the Global window object after each of these lines:

*/

aa1 = 'new global variable';
console.log('aa1:', window.aa1);

window.aa2 = 'another new global variable';
console.log('aa2:', aa2);

debugger; /*

  trying to read a window property that does not exist gives `undefined`

  trying to read a global variable that does not exist gives an error

*/

console.log(window.apples);

try {
  apples;
} catch (err) {
  console.error(err);
}

/* references:

  - https://javascript.info/global-object
  - Window & Global: https://www.youtube.com/watch?v=DSoOZK6J51A
  - https://conceptvisuals.in/2020/07/17/global-pollution-in-javascript/

*/
