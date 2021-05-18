'use strict';

/* Replicate Errors

  each exercise in this chapter will have two parts
  1. cause the asserted error by writing broken JavaScript
  2. throw the same error manually

  you will want to use Chrome/ium for these exercises
  the assertions were written for v8 error messages

*/

console.log('- broken JS -');
try {
  const x = true;
  x = false;
  console.assert(false, 'it should throw');
} catch (err) {
  console.log(err.message)
  console.assert(err.name === 'TypeError', 'name fail');
  console.assert(err.message === 'Assignment to constant variable.', 'message fail');
}


console.log('- throw new -');
try {
  throw new TypeError('Assigment to constant variable.');
  console.assert(false, 'it should throw');
} catch (err) {
  console.assert(err.name === 'TypeError', 'name fail');
  console.assert(err.message === 'Assigment to constant variable.', 'message fail');
}
