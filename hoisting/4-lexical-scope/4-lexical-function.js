debugger; /* lexical scope: functions

  you can also declare functions inside functions
  they will only be available in that scope

  everything you've learned about function statements is still the same

*/

aNewScope();

function aNewScope() {
  // available because the function was hoisted
  aDeclaredFunction();
  aDeclaredFunction();

  // function declarations do not take a step in execution
  function aDeclaredFunction() {
    console.log('hello');
  }

  aDeclaredFunction();
  aDeclaredFunction();

  // reassign the variable
  aDeclaredFunction = 'hello';

  try {
    // it's no longer a function!
    aDeclaredFunction();
  } catch (err) {
    console.error(err);
  }
}

aNewScope();
