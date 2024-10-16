debugger; /* steps of execution

  `var` is hoisted, it is declared in creation phase
    firefox & chrome/ium: the declaration is not a step of program execution

  `let` & `const` are declared in execution phase
    firefox: the declaration is not a step of program execution
      but passing the line will change the variable from (uninitialized) to `undefined`
    chrome/ium: the declaration is a step of execution

*/

var aVarVariable;
aVarVariable = 'hello';

let aLetVariable;
aLetVariable = 'hi';

const aConstVariable = 'initialization is required';
