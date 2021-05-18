'use strict';

/*
  browser:

  name:
  message:

  callstack:

  life cycle:

  the mistake:
  the fix(es):
*/

console.log('- broken JS -');
try { // comment the error and mistake in this code

  console.assert(false, 'it should throw');
} catch (err) {
  console.assert(err.name === 'ReferenceError', 'name fail');
  console.assert(err.message === "turtle is not defined", 'message fail');
}


console.log('- throw new -');
try {

  console.assert(false, 'it should throw');
} catch (err) {
  console.assert(err.name === 'ReferenceError', 'name fail');
  console.assert(err.message === "turtle is not defined", 'message fail');
}
