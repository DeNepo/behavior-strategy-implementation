debugger; /* lexical scope: global variables

  you can always use global variables from inside a function call
  this is a common practice when you need to do the same task many times
    functions used this way are often called "procedures"

  procedures often do not take any arguments, they work by side-effect

*/

var aList = [];

addToList('first');
addToList('second');
addToList('third');

console.log(aList);

function addToList(newThing) {
  // push directly directly to a global variable
  aList.push(newThing);
}
