# Array Methods

Array methods are javaScript built-in functions that are inherited from the object prototype

## Object prototypes

Each array object comes (inherits) with it a second object that is the prototype, the prototype object are built in properties and functions known as methods because they are stored in an object

When you create an array literal the array immediately inherits the object prototype

This will be shown in the code below

```js
// Array.prototype contains all the array methods and properties
const ArrayPrototype = Array.prototype;
// Try it in the console
console.log(ArrayPrototype);

// declare an empty array inherits the prototype object
const newArray = [];

// Logging the output the new array in the console you will be able to see hte inherited second object "the prototype object" 
console.log(newArray);

// Expanding the array The output shown should be like this 
[]
length: 0
__proto__: Array(0)  // expanding it, you will see all the built-in methods and properties thar can be used in the array

```

In this section are going to be shown how the most important methods are under the hood, in [functional array methods](array-methods/03-functional-array-methods) we will see them in action.

There are a lot methods and you don't need to master all of them in this chapter but is good to know where they are and during your journey in code you will master all of them

Almost every object have their own prototype and this topic will be touched deeply in future modules `Object prototype and inheritance`, in mean time lets keep it only with Array-prototype

---

## Links

- [CODEPROJECT Reference](https://reference.codeproject.com/book/javascript/Reference/Global_Objects/Array/prototype)
- [Array Prototype](https://www.youtube.com/watch?v=Qx70BuDB8tk&t=3s)
- [doesitmutate.xyz](https://doesitmutate.xyz/)
- [Higher-Order Functions](https://medium.com/humans-create-software/a-dirt-simple-introduction-to-higher-order-functions-in-javascript-b33bf9e19056)
- [Map](https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2)
- [Reduce Basics](https://www.youtube.com/watch?v=Wl98eZpkp-c&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=3)
