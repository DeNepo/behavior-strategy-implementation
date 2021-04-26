debugger; /*

  open the Global scope in your browser's debugger
  scroll through all of the properties, do some look familiar?

  all these properties come built into the browser environment
  you can (and have!) use them as global variables
  you can use them as plain variables or as window properties

  find the .alert property, this is what you use for interactions
  the rest of this file will explore changes to this property

  hint: firefox conveniently collapses built-ins under <default properties>
    to make these examples easier to study in other browsers
    all the variable names will start with "a" so you don't have to scroll so much

*/

console.log(
  'alert is the same function as window.alert:',
  alert === window.alert
);

debugger; /*

  you can reassign these to different values!

  reassigning the variable or the window property is the same

*/

alert('using alert as a global variable');
window.alert('using alert as a window property');

alert = 'reassign as global variable';
console.log(window.alert);

window.alert = 'reassign as window property';
console.log(alert);

try {
  alert('no longer a function!');
} catch (err) {
  console.error(err);
}

debugger; /*

  everything you will use in JS that you did not declare yourself is a built-in:
  - console
  - prompt, alert, confirm
  - fetch
  - document
  - localStorage
  - ...

  here are some links to learn more about the window object and browser built-ins (you can use command-click to open them in a new tab):

  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
  - https://javascript.plainenglish.io/using-javascript-objects-built-into-browsers-579a5315cc22

*/
