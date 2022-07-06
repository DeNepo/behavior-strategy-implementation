// #todo

'use strict';

/* throw new Error()

  before you saw how to create new errors, but that's still not the whole story
  what if your errors could stop the program just like native errors?

  you can!

*/

try {
  throw new Error('magic');
  console.log('never happens!');
} catch (err) {
  console.error(err);
}

// you can throw anything you want, it's just not common practice
try {
  throw 4;
} catch (number) {
  console.error(number);
}
