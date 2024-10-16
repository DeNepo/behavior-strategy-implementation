// #todo

'use strict';

console.log('- broken JS -');
try {
  let name;
  name.length;
} catch (err) {
  console.error(err);
}

console.log('- throw new error -');
try {
  throw __;
} catch (err) {
  console.error(err);

  console.assert(err.name === 'TypeError', 'name fail');
  console.assert(
    err.message === "Cannot read property 'length' of undefined",
    'message fail',
  );
}
