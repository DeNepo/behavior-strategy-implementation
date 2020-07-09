'use strict';

/* the callstack happens when you call a function from inside a function call
  this is much easier to visualize than to describe, so ... JS Tutor!
*/


const func1 = () => {
  const currentFunctionCall = 'func 1';
  console.log(currentFunctionCall);
};
const func2 = () => {
  const currentFunctionCall = 'func 2';
  console.log(currentFunctionCall);
  func1();
  console.log(currentFunctionCall);
};
const func3 = () => {
  const currentFunctionCall = 'func 3';
  console.log(currentFunctionCall);
  func2();
  console.log(currentFunctionCall);
};



console.log('this callstack is 1 call deep');
func1();

// it's backwards from what you might expect
//  2 will open first, but 1 will close first
console.log('this callstack is 2 calls deep');
func2();

console.log('this callstack is 3 calls deep');
func3();
