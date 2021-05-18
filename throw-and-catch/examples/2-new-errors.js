'use strict';

/* new Error()

  errors aren't magic, you can create your own!

  there are a few different types of errors
  let's look at the kinds of errors you might want to create

*/

try {
  // creating a new error does not stop the program
  const newError = new Error('magic');
} catch (err) {
  console.log('never happens!');
};


const newError1 = new Error('hello world!');
const newError1Name = newError1.name;
const newError1Message = newError1.message;
console.log(newError1Name);
console.log(newError1Message);
console.error(newError1);


const newTypeError1 = new TypeError('something is not a something');
const newTypeError1Name = newTypeError1.name;
const newTypeError1Message = newTypeError1.message;
console.log(newTypeError1Name);
console.log(newTypeError1Message);
console.error(newTypeError1);


const newRangeError1 = new RangeError('loopGuard_5 exceeded 15 iterations');
const newRangeError1Name = newRangeError1.name;
const newRangeError1Message = newRangeError1.message;
console.log(newRangeError1Name);
console.log(newRangeError1Message);
console.error(newRangeError1);


