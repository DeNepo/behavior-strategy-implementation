'use strict';

/* Intercepting Delegation

  When JavaScript executes your code it looks up the chain for properties/methods
  it will find the nearest property in the chain and stop looking up

  you can use this to over-ride native methods

*/


{ // use the own property "map" instead of the delegated one
  const _3_arrayLiteral = [];
  _3_arrayLiteral.map = function () {
    console.log('hello from instance!')
  };
  const _3__hasOwnPropertyToString = _3_arrayLiteral.hasOwnProperty('map');

  // these two variables reference the same value in JS memory
  const _2b_arrayLiteral__proto__ = _3_arrayLiteral.__proto__;
  const _2a_ArrayPrototype = Array.prototype;
  const _2__hasOwnPropertyToString = Array.prototype.hasOwnProperty('map');

  // this is where all the array methods are stored
  //   these two variables reference the same value in JS memory
  const _1b_ArrayPrototype__proto__ = Array.prototype.__proto__;
  const _1a_ObjectPrototype = Object.prototype;
  const _1__hasOwnPropertyToString = Object.prototype.hasOwnProperty('map');

  // end of the prototype chain
  const _0_ObjectPrototype__proto__ = Object.prototype.__proto__;

  console.log('array instance:', _3_arrayLiteral);
  _3_arrayLiteral.map();
}


{ // you can find this inside of JavaScript as well!

  const _3_arrayLiteral = [];
  const _3__hasOwnPropertyToString = _3_arrayLiteral.hasOwnProperty('toString');

  // these two variables reference the same value in JS memory
  const _2b_arrayLiteral__proto__ = _3_arrayLiteral.__proto__;
  const _2a_ArrayPrototype = Array.prototype;
  const _2__hasOwnPropertyToString = Array.prototype.hasOwnProperty('toString');

  // this is where all the array methods are stored
  //   these two variables reference the same value in JS memory
  const _1b_ArrayPrototype__proto__ = Array.prototype.__proto__;
  const _1a_ObjectPrototype = Object.prototype;
  const _1__hasOwnPropertyToString = Object.prototype.hasOwnProperty('toString');

  // end of the prototype chain
  const _0_ObjectPrototype__proto__ = Object.prototype.__proto__;

  console.log('array instance:', _3_arrayLiteral);

  console.assert(
    _3_arrayLiteral.toString === Array.prototype.toString,
    'array instance uses Array.prototype.toString'
  );

  console.assert(
    _3_arrayLiteral.toString !== Object.prototype.toString,
    'array instance DOES NOT use Object.prototype.toString'
  );
}
