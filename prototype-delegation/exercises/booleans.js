'use strict';


const booleanLiteral = false;

// delegation

const test1 = booleanLiteral.__proto__ === _._;
console.assert(test1, '1. booleans delegate to ...');

const test2 = Boolean._._ === Object._;
console.assert(test2, '2. the next step in the delegation chain is ...');

const test3 = Object._._ === _;
console.assert(test3, '3. the final step in the delegation chain is ...');


// instance methods & properties

const test4 = booleanLiteral.hasOwnProperty('toString') === _;
console.assert(test4, '4. booleans have own property .toString');

const test5 = Boolean.prototype.hasOwnProperty('toString') === _;
console.assert(test5, '5. Boolean.prototype has own property .toString');

const test6 = booleanLiteral.toString === Boolean._._;
console.assert(test6, '6. booleans delegate .toString');


// static methods

// Boolean has no static methods
