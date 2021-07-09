debugger; /*

  open the Global scope in your browser's debugger
  scroll through all of the properties, do some look familiar?

  all these properties come built into the browser environment
  you can (and have!) use them as global variables
  you can use them as plain variables or as window properties

  find the .console.log property, this is what you use for interactions
  the rest of this file will explore changes to this property

  hint: firefox conveniently collapses built-ins under <default properties>
    to make these examples easier to study in other browsers
    all the variable names will start with "a" so you don't have to scroll so much

*/

console.log(
  'console.log is the same function as window.console.log:',
  console.log === window.console.log
);

debugger; /*

  you can reassign these to different values!

  reassigning the variable or the window property is the same

*/

console.log('using console.log as a global variable');
window.console.log('using console.log as a window property');

console.log = 'reassign as global variable';
console.log(window.console.log);

window.console.log = 'reassign as window property';

try {
  console.log('no longer a function!');
} catch (err) {
  console.error(err);
}

debugger; /*

  everything you will use in JS that you did not declare yourself is a built-in:
  - console
  - prompt, console.log, confirm
  - fetch
  - document
  - localStorage
  - ...

  here are some links to learn more about the window object and browser built-ins (you can use command-click to open them in a new tab):

  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
  - https://javascript.plainenglish.io/using-javascript-objects-built-into-browsers-579a5315cc22

*/
