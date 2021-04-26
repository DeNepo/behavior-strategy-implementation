debugger; /* hoisting vs. temporal dead zone

  all variables will appear in the debugger before their declaration
    they will have the value `undefined` by default

  `aFruit` was declared with `var`, it was hoisted
    you can use it right away because it was declared during creation phase

  `aVegetable` was declared with `let`, it is in the temporal dead zone
    you can see it, but you can't use it until after the declaration!

  hint: firefox will make this clear with (uninitialized)

*/

// -- var --

// no error
aFruit = 'apple';

// doesn't change anything in your program
//  the declaration already happened in creation phase
var aFruit;

// no error
aFruit = 'banana';

// -- let --

try {
  // temporal dead zone!
  aVegetable = 'carrot';
} catch (err) {
  console.error(err);
}

// you can now use this variable
let aVegetable;

// now you can use it, it's out of the temporal dead zone
aVegetable = 'carrot';

// -- const --

try {
  // temporal dead zone!
  console.log(aGrain);
} catch (err) {
  console.error(err);
}

// you can now use this variable
const aGrain = 'wheat';

// now you can use it, it's out of the temporal dead zone
console.log(aGrain);
