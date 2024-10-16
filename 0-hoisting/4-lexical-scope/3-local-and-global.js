debugger; /* local & global

  a little example with local and global variables

*/

// this declaration was hoisted!
var aGlobalVariable = 0;

// can use this function before it's declaration
//  it was hoisted!
aLexicalScope('hello');

// function declarations are not a step of execution
function aLexicalScope(value) {
  // hoisted: available from the first step of execution
  aLocalVariable = value;

  // modify a global variable from the lexical scope
  aGlobalVariable = aGlobalVariable + 1;

  var aLocalVariable;
}

aLexicalScope('good bye');

// this will not work in strict mode!
aLocalVariable = 'sneaky: actually created a new global variable!';
