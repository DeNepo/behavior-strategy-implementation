'use strict';

// ES6 introduced a new way to add object properties
//  it's kind of like bracket notation
//  but for object literals

const firstName = 'Brendan';
const lastName = 'Eich';

// use the name of the variable for the property name
// and the variable's value for the property value
const es6shortHand = {
  firstName,
  lastName
};

const testKey1 = computedPropertyNames.firstName === 'Brendan';
console.assert(testKey1, 'Test: key 1');

const testKey2 = computedPropertyNames.lastName === 'Eich';
console.assert(testKey2, 'Test: key 2');

// https://ui.dev/computed-property-names/
