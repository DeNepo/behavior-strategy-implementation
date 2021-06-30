'use strict';


const functionLiteral = function () { };

// delegation

const test1 = functionLiteral.__proto__ === _._;
console.assert(test1, '1. functions delegate to ...');

const test2 = Function._._ === Object._;
console.assert(test2, '2. the next step in the delegation chain is ...');

const test3 = Object._._ === _;
console.assert(test3, '3. the final step in the delegation chain is ...');


// instance methods & properties

const test4 = functionLiteral.hasOwnProperty('bind') === _;
console.assert(test4, '4. functions have own property .bind');

const test5 = Function.prototype.hasOwnProperty('bind') === _;
console.assert(test5, '5. Function.prototype has own property .bind');

const test6 = functionLiteral.bind === Function._._;
console.assert(test6, '6. functions delegate .bind');


// static methods

// Function has no static methods
