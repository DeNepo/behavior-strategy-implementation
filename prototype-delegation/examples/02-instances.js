'use strict';

/* Instances

  You've been using instances all along without knowing it!
  In the last examples you learned about the main global classes
    and you learned about the .__proto__ and .prototype

  Now it's time to see how this has working behind the scenes all along

  Study hints:
    have the assets/prototype-chain-1.jpeg diagram open while studying this example
      it will give you a good visual cue for what you're about to learn
    You should study these examples and exercises in the debugger
      JS Tutor does not visualize prototype chains as clearly as the debugger
*/



{ // object literals - instances of Object

  const _2_objectLiteral = {};

  // these two variables reference the same value in JS memory
  const _1b_objectLiteral__proto__ = _2_objectLiteral.__proto__;
  const _1a_ObjectPrototype = Object.prototype;

  // end of the prototype chain
  const _0_ObjectPrototype__proto__ = Object.prototype.__proto__;

  console.log('object literal:', _2_objectLiteral);
}



{ // array literals - instances of Array
  const _3_arrayLiteral = [];

  // these two variables reference the same value in JS memory
  const _2b_arrayLiteral__proto__ = _3_arrayLiteral.__proto__;
  const _2a_ArrayPrototype = Array.prototype;

  // this is where all the array methods are stored
  //   these two variables reference the same value in JS memory
  const _1b_ArrayPrototype__proto__ = Array.prototype.__proto__;
  const _1a_ObjectPrototype = Object.prototype;

  // end of the prototype chain
  const _0_ObjectPrototype__proto__ = Object.prototype.__proto__;

  console.log('array literal:', _3_arrayLiteral);
}


{ // string literals - instances of String
  const _3_stringLiteral = '';

  // these two variables reference the same value in JS memory
  const _2b_stringLiteral__proto__ = _3_stringLiteral.__proto__;
  const _2a_StringPrototype = String.prototype;

  // these two variables reference the same value in JS memory
  const _1b_StringPrototype__proto__ = String.prototype.__proto__;
  const _1a_ObjectPrototype = Object.prototype;

  // end of the prototype chain
  const _0_ObjectPrototype__proto__ = Object.prototype.__proto__;

  console.log('string literal:', _3_stringLiteral);
}


{ // number literals - instances of Number
  const _3_numberLiteral = 0;

  // these two variables reference the same value in JS memory
  const _2b_numberLiteral__proto__ = _3_numberLiteral.__proto__;
  const _2a_NumberPrototype = Number.prototype;

  // these two variables reference the same value in JS memory
  const _1b_NumberPrototype__proto__ = Number.prototype.__proto__;
  const _1a_ObjectPrototype = Object.prototype;

  // end of the prototype chain
  const _0_ObjectPrototype__proto__ = Object.prototype.__proto__;

  console.log('number literal:', _3_numberLiteral);
}


{ // boolean literals - instances of Boolean
  const _3_booleanLiteral = 0;

  // these two variables reference the same value in JS memory
  const _2b_booleanLiteral__proto__ = _3_booleanLiteral.__proto__;
  const _2a_BooleanPrototype = Boolean.prototype;

  // these two variables reference the same value in JS memory
  const _1b_BooleanPrototype__proto__ = Boolean.prototype.__proto__;
  const _1a_ObjectPrototype = Object.prototype;

  // end of the prototype chain
  const _0_ObjectPrototype__proto__ = Object.prototype.__proto__;

  console.log('boolean literal:', _3_booleanLiteral);
}


{ // es5 function literals - instances of Function
  const _3_es5Function = function () { };

  // these two variables reference the same value in JS memory
  const _2b_es5Function__proto__ = _3_es5Function.__proto__;
  const _2a_FunctionPrototype = Function.prototype;

  // these two variables reference the same value in JS memory
  const _1b_FunctionPrototype__proto__ = Function.prototype.__proto__;
  const _1a_ObjectPrototype = Object.prototype;

  // end of the prototype chain
  const _0_ObjectPrototype__proto__ = Object.prototype.__proto__;

  console.log('es5 function literal:', _3_es5Function);
}


{ // es6 function literals - instances of Function
  const _3_es6Function = () => { };

  // these two variables reference the same value in JS memory
  const _2b_es6Function__proto__ = _3_es6Function.__proto__;
  const _2a_FunctionPrototype = Function.prototype;

  // these two variables reference the same value in JS memory
  const _1b_FunctionPrototype__proto__ = Function.prototype.__proto__;
  const _1a_ObjectPrototype = Object.prototype;

  // end of the prototype chain
  const _0_ObjectPrototype__proto__ = Object.prototype.__proto__;

  console.log('es6 function literal:', _3_es6Function);
}
