'use strict';

// two different arrays with the same values
// psst.  use JS Tutor & the debugger!

const array1 = [false, 2, 3];
const array2 = [false, 2];

const test1 = array1 !== array2;
console.assert(test1, 'Test 1');

const test2a = array1[0] === false;
const test2b = array2[0] === false;
console.assert(test2a && test2b, 'Test 2');

