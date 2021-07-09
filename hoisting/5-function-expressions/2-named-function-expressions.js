debugger; /* named function expressions

  you can also write function expressions with a named function declaration
  the only difference from the last example is going to be the function's name
    it will take on the declaration name, NOT the variable's name

*/

var aFunction = function aGreeting() {
  console.log('hello');
};

console.log(aFunction.name);

aFunction();
aFunction();

debugger; /*

    reassigning the function will not change the name

  */

var aFunction2 = aFunction;

console.log(aFunction2.name);
console.log(
  'both variables reference the same function:',
  aFunction === aFunction2
);

aFunction2();
aFunction2();

debugger; /*

    the declared name is NOT available to use in your program!

    you can see this in the debugger and the ?variables lens
    you can also see it because of the error when you try to call it

    careful!  notice which error you get: `ReferenceError`
      the variable name doesn't even exist!
    you did not get `TypeError: is not a function`
      which is what you get when you call a variable that is not a function

  */

try {
  aGreeting();
} catch (err) {
  console.error(err);
}

// cool, so what's this good for?  it's useful for ...
