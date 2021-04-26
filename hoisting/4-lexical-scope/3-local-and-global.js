debugger; /* local & global

  a little example with local and global variables

*/

// this declaration was hoisted!
var aGlobalVariable = 0;

// can use this function before it's declaration
//  it was hoisted!
aLexicalScope();

// function declarations are not a step of execution
function aLexicalScope() {
  aLocalVariable = 'hoisted: available from the first step of execution';

  // modify a global variable from the lexical scope
  aGlobalVariable = aGlobalVariable + 1;

  var aLocalVariable;
}

aLexicalScope();

aLocalVariable = 'sneaky: actually created a new global variable!';
