'use strict';

// you can also use bracket notation to define key names
//  this isn't very common, but is very nice when it's needed

const key1 = 'firstName';
const value1 = 'Brendan';

const key2 = 'lastName';
const value2 = 'Eich';

const computedPropertyNames = {
  [key1]: value1,
  [key2]: value2
};

const testKey1 = computedPropertyNames.firstName === 'Brendan';
console.assert(testKey1, 'Test: key 1');

const testKey2 = computedPropertyNames.lastName === 'Eich';
console.assert(testKey2, 'Test: key 2');

// https://ui.dev/computed-property-names/
