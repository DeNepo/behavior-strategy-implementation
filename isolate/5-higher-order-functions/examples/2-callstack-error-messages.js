'use strict';

/* error messages printed to the console log the callstack
  study this example in the debugger
  compare what you see in the "callstack" tab to what's logged
*/


const func1 = () => {
  depth++;
  if (depth === 3) {
    throw new Error('read the callstack!');
  }
  const currentFunctionCall = 'func 1';
  console.log(currentFunctionCall);
  depth--;
};
const func2 = () => {
  depth++;
  const currentFunctionCall = 'func 2';
  console.log(currentFunctionCall);
  func1();
  console.log(currentFunctionCall);
  depth--;
};
const func3 = () => {
  depth++;
  const currentFunctionCall = 'func 3';
  console.log(currentFunctionCall);
  func2();
  console.log(currentFunctionCall);
  depth--;
};

let dept = 0;


console.log('this callstack is 1 call deep');
func1();

// it's backwards from what you might expect
//  2 will open first, but 1 will close first
console.log('this callstack is 2 calls deep');
func2();

console.log('this callstack is 3 calls deep');
func3();
