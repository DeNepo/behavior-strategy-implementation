'use strict';


const arrayLiteral = [];

// delegation

const test1 = arrayLiteral.__proto__ === _._;
console.assert(test1, '1. arrays delegate to ...');

const test2 = Array._._ === Object._;
console.assert(test2, '2. the next step in the delegation chain is ...');

const test3 = Object._._ === _;
console.assert(test3, '3. the final step in the delegation chain is ...');


// instance methods & properties

const test4 = arrayLiteral.hasOwnProperty('reduce') === _;
console.assert(test4, '4. arrays have own property .reduce');

const test5 = Array.prototype.hasOwnProperty('reduce') === _;
console.assert(test5, '5. Array.prototype has own property .reduce');

const test6 = arrayLiteral.reduce === Array._._;
console.assert(test6, '6. arrays delegate .reduce');


// static methods

const test7 = arrayLiteral.hasOwnProperty('isArray') === _;
console.assert(test7, '7. arrays have own property isArray');

const test8 = Array.prototype.hasOwnProperty('isArray') === _;
console.assert(test8, '8. Array.prototype has own property isArray');

const test9 = Array.hasOwnProperty('isArray') === _;
console.assert(test9, '9. Array has own property isArray');
