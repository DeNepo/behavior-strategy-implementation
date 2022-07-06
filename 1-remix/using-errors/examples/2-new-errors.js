// #todo

'use strict';

/* new Error()

  errors aren't magic, you can create your own!

  there are a few different types of errors
  let's look at some of the errors you may have come across in your code

*/

const newError1 = new Error('hello world!');
console.log(newError1.name);
console.log(newError1.message);
console.error(newError1);

const newTypeError1 = new TypeError('something is not a something');
console.log(newTypeError1.name);
console.log(newTypeError1.message);
console.error(newTypeError1);

const newRangeError1 = new RangeError('loopGuard_5 exceeded 15 iterations');
console.log(newRangeError1.name);
console.log(newRangeError1.message);
console.error(newRangeError1);
