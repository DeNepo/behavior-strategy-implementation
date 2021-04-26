debugger; /* lexical scope: global variables

  you can always use global variables from inside a function call
  this is a common practice when you need to do the same task many times
    functions used this way are often called "procedures"

  procedures often do not take any arguments, they work by side-effect

*/

var aList = "";

addToList();
addToList();
addToList();
console.log(aList);

function addToList() {
  // pushed directly to a global variable
  var newThing = prompt("add something to the list");
  aList += newThing + ", ";
}
