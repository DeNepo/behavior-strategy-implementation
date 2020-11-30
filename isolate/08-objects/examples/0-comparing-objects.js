'use strict';

/* Comparing Objects

  Objects are also reference types like Arrays
  when you compare two objects you need to check each and every entry

  the order of entries in an array does not matter

*/

const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  b: 2,
  a: 1,
};

// strict comparison of objects
const strictCompareOneAndOne = obj1 === obj1;
console.assert(
  strictCompareOneAndOne === true,
  'strict comparing the same object objects'
);

const strictCompareOneAndTwo = obj1 === obj2;
console.assert(
  strictCompareOneAndTwo === false,
  'strict comparing different objects with the same values'
);

// deep comparison of objects
const deepCompareOneAndOne = obj1.a === obj1.a && obj1.b === obj1.b;
console.assert(
  deepCompareOneAndOne === true,
  'an object is always deeply equal to itself'
);

const deepCompareOneAndTwo = obj1.a === obj1.a && obj1.b === obj1.b;
console.assert(
  deepCompareOneAndTwo === true,
  'objects are deeply equal when they have the same key/value pairs'
);
