debugger; /* block scope

  `var` variables are only scoped by functions
  `let` and `const` are also scoped by blocks like control flow

  hint: try the variables button

*/

if (true) {
  let aVegetable = 'potato';
  var aFruit = 'apple';
}

aFruit = 'banana';

// sneaky!  this created a global variable
//  in strict mode this would throw an error
aVegetable = 'carrot';
