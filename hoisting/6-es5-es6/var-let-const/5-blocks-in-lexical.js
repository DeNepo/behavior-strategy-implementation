debugger; /* blocks in lexical

  block scopes work the same when they are inside a function

  watch the "scope stack" in your debugger
  every variable you can see is available from your current line

*/

const aLexicalScope = () => {
  if (true) {
    let aVegetable = 'potato';
    var aFruit = 'apple';
  }

  aFruit = 'banana';

  // sneaky!  this created a global variable
  //  in strict mode this would throw an error
  aVegetable = 'carrot';
};

aLexicalScope();
aLexicalScope();
