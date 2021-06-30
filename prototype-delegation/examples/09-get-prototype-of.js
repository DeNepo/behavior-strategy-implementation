'use strict';

/* Object.getPrototypeOf(_);

  Using the .__proto__ and .prototype properties is annoying and slow

  Fortunately there is a simple static method to help find a value's prototype

    Object.getPrototypeOf(_) - returns a thing's prototype

  In the following example are 3 ways to find the same prototype object

*/

const _Object = Object;

const ArrayPrototype_a = ([]).__proto__;
const ArrayPrototype_b = Array.prototype;
const ArrayPrototype_c = Object.getPrototypeOf([]);


const BooleanPrototype_a = (false).__proto__;
const BooleanPrototype_b = Boolean.prototype;
const BooleanPrototype_c = Object.getPrototypeOf(false);


const NumberPrototype_a = (0).__proto__;
const NumberPrototype_b = Number.prototype;
const NumberPrototype_c = Object.getPrototypeOf(0);


const ObjectPrototype_a = ({}).__proto__;
const ObjectPrototype_b = Object.prototype;
const ObjectPrototype_c = Object.getPrototypeOf({});


const es5FunctionPrototype_a = (function () { }).__proto__;
const es5FunctionPrototype_b = Function.prototype;
const es5FunctionPrototype_c = Object.getPrototypeOf(function () { });


const es6FunctionPrototype_a = (() => { }).__proto__;
const es6FunctionPrototype_b = Function.prototype;
const es6FunctionPrototype_c = Object.getPrototypeOf(() => { });

