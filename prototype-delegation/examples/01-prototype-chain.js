'use strict';

/* the Prototype Chain

  Have you ever wondered where .map() comes from and why all arrays have this method?
  or why Object.keys() and Object.values() are methods on capital "O" Object?
  or why the MDN documentation has so many links with .prototype on the left sidebar?
  or why there's always a __proto__ property in the devtools on arrays, functions and objects in

  All these mysteries and more will be clear when you understand prototypical inheritance!

  There are two important properties for understanding JS the prototype system
    .__proto__ - stores a reference to a .prototype property on another object
    .prototype - stores an object that is referenced by other .__proto__ properties

  Study hints:
    have the assets/prototype-chain-1.jpeg diagram open while studying this example
      it will give you a good visual cue for what you're about to learn
    You should study these examples and exercises in the debugger
      JS Tutor does not visualize prototype chains as clearly as the debugger
*/




// Object.prototype is referenced by the other main classes
const _ObjectPrototype = Object.prototype;
// Object.prototype.__proto__ references null
const _ObjectPrototype__proto__ = Object.prototype.__proto__;




// Array.prototype contains all the array methods
const ArrayPrototype = Array.prototype;
// Array.prototype.__proto__ references Object.prototype
const ArrayPrototype__proto__ = Array.prototype.__proto__;


// Boolean.prototype contains all the boolean methods
const BooleanPrototype = Boolean.prototype;
// Boolean.prototype.__proto__ references Object.prototype
const BooleanPrototype__proto__ = Boolean.prototype.__proto__;


// Function.prototype contains all the function methods
const FunctionPrototype = Function.prototype;
// Function.prototype.__proto__ references Object.prototype
const FunctionPrototype__proto__ = Function.prototype.__proto__;


// Number.prototype contains all the number methods
const NumberPrototype = Number.prototype;
// Function.prototype.__proto__ references Object.prototype
const NumberPrototype__proto__ = Number.prototype.__proto__;


// String.prototype contains all the string methods
const StringPrototype = String.prototype;
// String.prototype.__proto__ references Object.prototype
const StringPrototype__proto__ = String.prototype.__proto__;
