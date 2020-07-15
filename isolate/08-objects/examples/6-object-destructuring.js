'use strict';

// ES6 introduced a nice way to generate variables from objects

const lukesFather = {
  firstName: 'Darth',
  lastName: 'Vader'
};

const { firstName, lastName } = lukesFather;

console.assert(firstName === 'Darth', 'Test: first name');
console.assert(lastName === 'Vader', 'Test: last name');



// https://medium.com/swlh/javascript-object-destructuring-es6-d5db76226
