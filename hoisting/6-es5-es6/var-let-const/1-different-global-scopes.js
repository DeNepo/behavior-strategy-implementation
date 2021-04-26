debugger; /* different global scopes

  `let` and `const` variables are not set as properties of the `window` object
    they are available everywhere, but live in a separate script-level block scope

  you can see this in the debugger, and by logging window properties

*/

var aFruit;
aFruit = 'apple';
console.log(aFruit);
console.log(window.aFruit);

let aVegetable;
aVegetable = 'carrot';
console.log(aVegetable);
console.log(window.aVegetable);

const aGrain = 'wheat';
console.log(aGrain);
console.log(window.aGrain);
