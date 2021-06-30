'use strict';

/* Prototype Delegation

  an instance has access to any property or method in it's prototype chain
  this is how you can use array methods without writing them yourself

  A useful method for investigating JS is .hasOwnProperty
  it will tell you if a property/method is delegated or not

*/


{

  const _objectLiteral = {
    hello: 'there'
  };


  const constructorIsOwnProperty = _objectLiteral.hasOwnProperty('constructor');
  const constructorValue = _objectLiteral.constructor;

  const helloIsOwnProperty = _objectLiteral.hasOwnProperty('hello');
  const helloValue = _objectLiteral.hello;

  console.log('_objectLiteral:', _objectLiteral);

}


{

  const _arrayLiteral = ['a', 'b', 'c'];


  const constructorIsOwnProperty = _arrayLiteral.hasOwnProperty('constructor');
  const constructorValue = _arrayLiteral.constructor;

  const lengthIsOwnProperty = _arrayLiteral.hasOwnProperty('length');
  const lengthValue = _arrayLiteral.length;

  const mapIsOwnProperty = _arrayLiteral.hasOwnProperty('map');
  const mapValue = _arrayLiteral.map;

  console.log('_arrayLiteral:', _arrayLiteral);

}


{

  const _stringLiteral = 'xyz';


  const constructorIsOwnProperty = _stringLiteral.hasOwnProperty('constructor');
  const constructorValue = _stringLiteral.constructor;

  const lengthIsOwnProperty = _stringLiteral.hasOwnProperty('length');
  const lengthValue = _stringLiteral.length;

  const toUpperCaseIsOwnProperty = _stringLiteral.hasOwnProperty('toUpperCase');
  const toUpperCaseValue = _stringLiteral.toUpperCase;

  console.log('_stringLiteral:', _stringLiteral);

}


// ... so on for functions, numbers and booleans


{ // but what about the .hasOwnProperty method ?
  //  all of these instances have access to it
  //  but it lives on the Object.prototype !

  const _3_stringLiteral = '';
  const _3__hasOwnPropertyLivesHere = _3_stringLiteral.hasOwnProperty('hasOwnProperty');

  // these two variables reference the same value in JS memory
  const _2b_stringLiteral__proto__ = _3_stringLiteral.__proto__;
  const _2a_StringPrototype = String.prototype;
  const _2__hasOwnPropertyLivesHere = String.prototype.hasOwnProperty('hasOwnProperty');

  // these two variables reference the same value in JS memory
  const _1b_StringPrototype__proto__ = String.prototype.__proto__;
  const _1a_ObjectPrototype = Object.prototype;
  const _1__hasOwnPropertyLivesHere = Object.prototype.hasOwnProperty('hasOwnProperty');

  // end of the prototype chain
  const _0_ObjectPrototype__proto__ = Object.prototype.__proto__;

  console.log('string instance:', _3_stringLiteral);
}


