// #todo

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
} catch (err) {
  console.error(err);
}

console.log('- throw new -');
try {
  throw new TypeError('Assignment to constant variable.');
} catch (err) {
  console.error(err);

  console.assert(err.name === 'TypeError', 'name fail');
  console.assert(
    err.message === 'Assignment to constant variable.',
    'message fail',
  );
}
