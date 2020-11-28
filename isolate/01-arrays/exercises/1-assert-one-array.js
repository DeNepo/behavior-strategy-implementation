'use strict';

// complete the asserts to describe the arrays

const livingThings = ['toad', 'monkey', 'walrus'];

console.assert(livingThings.length === 3, 'Test 1: length');
console.assert(livingThings[1] === 'monkey', 'Test 1: a');
console.assert(livingThings[2] === 'walrus', 'Test 1: b');
console.assert(livingThings[0] === 'toad', 'Test 1: c');


const numbers = [3, 9, 12, 9];

console.assert(numbers.length === 4, 'Test 2: length');
console.assert(numbers[3] === 9, 'Test 2: a');
console.assert(numbers[1] === 9, 'Test 2: b');
console.assert(numbers[2] === 12, 'Test 2: c');
console.assert(numbers[0] === 3, 'Test 2: d');


const mixed = [null, 9, true, '9', 'pulse'];

console.assert(mixed.length === 5, 'Test 3: length');
console.assert(mixed[1] === 9, 'Test 3: a');
console.assert(mixed[3] === '9', 'Test 3: b');
console.assert(mixed[0] === null, 'Test 3: c');
console.assert(mixed[4] === 'pulse', 'Test 3: d');
console.assert(mixed[2] === true, 'Test 3: e');


const complicated = ['a', 'b', 'c', 'f'];
complicated[4] = 'e';
const temp = complicated[2];
complicated[2] = complicated[1];
complicated[1] = temp;
//'a', 'c', 'b', 'f', 'e'

console.assert(complicated.length === 5, 'Test 4: length');
console.assert(complicated[0] === 'a', 'Test 4: a');
console.assert(complicated[1] === 'c', 'Test 4: b');
console.assert(complicated[2] === 'b', 'Test 4: c');
console.assert(complicated[3] === 'f', 'Test 4: d');
console.assert(complicated[4] === 'e', 'Test 4: e');


