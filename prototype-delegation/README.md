# Prototype Delegation

Array methods are javaScript built-in functions that are inherited from their prototype.

Each array object has access to (inherits) from a second object that is the _prototype_, the prototype has built in properties you've been using for a long time without even thinking about it: `.toUpperCase()`, `.toLowerCase()`, ... a method is simply a property who's type is `"function"`.

When you create an _array literal_ the array automatically inherits from it's prototype, giving you access to all of the array methods you will soon fall in love with.

```js
'use strict';

const anArray = [];
console.log(anArray.map); // where does this come from?

const anArrayProto = anArray.__proto__;
console.log(anArray.__proto__); // it comes from here!

const ArrayPrototype = Array.prototype;
console.log(ArrayPrototype); // this is built into JS

console.assert(anArrayProto === ArrayPrototype, "they're the same thing!"); // both refer to the same object in memory

// it's the same for strings, numbers, booleans, ...
```

Understanding how prototype delegation is helpful for reading documentation, understanding what you see in the debugger, and having a general idea how JS works. But it's not something you need to understand perfectly.

In this module you will never need to write code that modifies prototypes, you'll just be using a lot of array methods. Writing code that intentionally uses prototypes enters the world of _Object Oriented Programming_. We won't be covering this at HYF.

In this module you will be using most important methods (see `/array-methods`). There are a lot methods and you don't need to master all of them, but is good to know where they come from.

---

## Links

- [CODEPROJECT Reference](https://reference.codeproject.com/book/javascript/Reference/Global_Objects/Array/prototype)
- [Array Prototype](https://www.youtube.com/watch?v=Qx70BuDB8tk&t=3s)
