'use strict';

/* undefined properties

  properties are undefined if they do not exist on any step of the prototype chain

  but what about properties assigned the value undefined ... ?

*/


const objectLiteral = {
  a: undefined
};


// .a --> undefined because it is assigned the value undefined
const objectLiteralDotA = objectLiteral.a;
const objectLiteralHasOwnPropertyA = objectLiteral.hasOwnProperty('a');
const objectLiteral__proto__hasOwnPropertyA = objectLiteral.__proto__.hasOwnProperty('a');

console.log('objectLiteral.a', objectLiteral.a);


// .b --> undefined because it does not exist in the delegation chain
const objectLiteralDotB = objectLiteral.b;
const objectLiteralHasOwnPropertyB = objectLiteral.hasOwnProperty('b');
const objectLiteral__proto__hasOwnPropertyB = objectLiteral.__proto__.hasOwnProperty('b');

console.log('objectLiteral.b', objectLiteral.b);
