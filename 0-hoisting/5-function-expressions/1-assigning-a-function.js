debugger; /* Function s

  function expressions are when a function is assigned to a variable
  careful: the variable is hoisted, but not the function!

  the logic behind this is that functions are also values
  assigning a function to a variable is exactly like assigning any other value

*/

// this will not work! aFunction is still an unassigned variable
try {
  aFunction();
} catch (err) {
  console.error(err);
}

var aFunction = function () {
  console.log('hello');
};

// you can only use it after it is assigned
aFunction();
aFunction();

debugger; /* names

  as you saw up there, it's possible to declare function expressions without a name
    this is common

  un-named functions get their name from the first variable they are assigned to
  assigning the function to a new variable does not change it's name
    remember reference vs. value?
    functions are a reference type!

  this is important to know when you are reading callstacks to fix errors

*/

console.log(aFunction.name);

var aFunction2 = aFunction;
console.log(aFunction2.name);

console.log(
  'both variables reference the same function:',
  aFunction === aFunction2
);

debugger; /*

  you can reassign the variable storing a function, just like with any other value
  any other references to this function will keep the original name

*/

aFunction = 'not a function anymore';

aFunction2();
try {
  aFunction();
} catch (err) {
  console.error(err);
}

/* references

  - statements vs. expressionss: https://www.youtube.com/watch?v=WVyCrI1cHi8
  - Dev Material: https://www.youtube.com/watch?v=qz7Nq1tV7Io
  - Harry Wolf: https://www.youtube.com/watch?v=VAYIPSNXHhw
  - Codeacademy: https://www.youtube.com/watch?v=oB5rH_9bqAI

*/
