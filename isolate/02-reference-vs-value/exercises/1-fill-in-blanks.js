'use strict';

// one array
// psst.  use JS Tutor & the debugger!

const array1 = [true,2,3];
const array2 = array1;

const test1 = array1 === array2;
console.assert(test1, 'Test 1');

const test2a = array1[0] === true;
const test2b = array2[0] === true;
console.assert(test2a && test2b, 'Test 2');

