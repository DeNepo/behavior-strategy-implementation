// #todo

'use strict';

/* try/catch blocks

  errors that happen in execution phase can can be handled using try/catch

  normally when an error occurs, your program stops
  with try/catch you can decide what happens when an error occurs
  this doesn't mean you can't be careful :)

  you won't need to use try/catch very often at all during HYF
  it's just nice to know about, and helpful for understanding errors

*/

const notAFunction = 'not a function';

try {
  // trying to call the string will throw an error
  notAFunction();
  // nothing in the try block will be executed after the error
  console.log('never happens, error!');
} catch (err) {
  // the error is passed as an argument to the catch block
  // you can do whatever you like in the catch block
  console.log(err.name);
  console.log(err.message);
}

try {
  notAFunction();
} catch (potato) {
  // you can use any variable name in the parenthesis
  console.error(potato);
}
