/*

  this example is a challenge! you can skip it and still learn everything you need for now

*/

debugger; /* recursing named expressions

  one of the best use-cases for a named function expression is recursion
  because you can call the function's name from inside the function

  this was necessary in es5 because there was no `const`
    you never knew if a variable would be reassigned!
    so you needed a way to make sure the function always referenced itself

*/

var aaNamed = function logNextLetter(text) {
  if (text.length !== 0) {
    console.log(text[0]);
    // uses the function declared with this name
    logNextLetter(text.slice(1));
  }
};

var aanUnnamed = function (text) {
  if (text.length !== 0) {
    console.log(text[0]);
    // uses the value assigned to this variable
    aanUnnamed(text.slice(1));
  }
};

aaNamed('dog');

aanUnnamed('cat');

debugger; /* reassign the variables */

var aanotherVariable1 = aaNamed;
var aanotherVariable2 = aanUnnamed;

aaNamed = null;
aanUnnamed = null;

debugger; /*

  prediction time!
  - which calls will throw an error?
  - if so, what errors will they throw?

*/

try {
  aaNamed('pig');
} catch (err) {
  console.error(err);
}

try {
  aanUnnamed('pig');
} catch (err) {
  console.error(err);
}

try {
  logNextLetter('pig');
} catch (err) {
  console.error(err);
}

try {
  aanotherVariable1('pig');
} catch (err) {
  console.error(err);
}

try {
  aanotherVariable2('pig');
} catch (err) {
  console.error(err);
}
