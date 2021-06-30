'use strict';


const numberLiteral = 0;

// delegation

const test1 = numberLiteral.__proto__ === _._;
console.assert(test1, '1. numbers delegate to ...');

const test2 = Number._._ === Object._;
console.assert(test2, '2. the next step in the delegation chain is ...');

const test3 = Object._._ === _;
console.assert(test3, '3. the final step in the delegation chain is ...');


// instance methods & properties

const test4 = numberLiteral.hasOwnProperty('toString') === _;
console.assert(test4, '4. numbers have own property .toString');

const test5 = Number.prototype.hasOwnProperty('toString') === _;
console.assert(test5, '5. Number.prototype has own property .toString');

const test6 = numberLiteral.toString === Number._._;
console.assert(test6, '6. numbers delegate .toString');


// static methods

const test7 = numberLiteral.hasOwnProperty('isNaN') === _;
console.assert(test7, '7. numbers have own property .isNaN');

const test8 = Number.prototype.hasOwnProperty('isNaN') === _;
console.assert(test8, '8. Number.prototype has own property .isNaN');

const test9 = Number.hasOwnProperty('isNaN') === _;
console.assert(test9, '9. Number has own property .isNaN');
