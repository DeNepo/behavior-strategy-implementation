'use strict';

/* Instance Methods

  Instance methods are called directly on an instance
  They live on the class's .prototype property

*/


{
  const arrayLiteral = ['a', 'b', 'c'];

  const mappedLetters = arrayLiteral.map(letter => letter.toUpperCase());
  const mapIsInstanceMethod = Array.prototype.hasOwnProperty('map');

  const sliceOneOne = arrayLiteral.slice(1, 2);
  const sliceIsInstanceMethod = Array.prototype.hasOwnProperty('slice');

  console.log('Array.prototype:', Array.prototype);

}


{
  const stringLiteral = 'XYZ';


  const charAt1 = stringLiteral.charAt(1);
  const charAtIsInstanceMethod = String.prototype.hasOwnProperty('charAt');

  const charCodeAt1 = stringLiteral.charCodeAt(1);
  const charCodeAtIsInstanceMethod = String.prototype.hasOwnProperty('charCodeAt');

  const includesYZ = stringLiteral.includes('YZ');
  const includesIsInstanceMethod = String.prototype.hasOwnProperty('includes');

  const toUpperCasedString = stringLiteral.toUpperCase();
  const toUpperCaseIsInstanceMethod = String.prototype.hasOwnProperty('toUpperCase');


  console.log('String.prototype:', String.prototype);

}

{
  const es5Function = function () {
    return this;
  };


  const appliedReturnValue = es5Function.apply({ hi: 'bye' });
  const applyIsInstanceMethod = Array.prototype.hasOwnProperty('apply');

  const boundFunction = es5Function.bind({ hi: 'bye' });
  const bindIsInstanceMethod = Function.prototype.hasOwnProperty('bind');

  const calledReturnValue = es5Function.call({ hi: 'bye' });
  const callIsInstanceMethod = Array.prototype.hasOwnProperty('call');


  console.log('Function.prototype:', Function.prototype);

}



{
  const objectLiteral = {
    x: 1
  };

  const objectLiteralHasOwnPropertyX = objectLiteral.hasOwnProperty('x');
  const objectLiteralHasOwnPropertyY = objectLiteral.hasOwnProperty('y');

  const hasOwnPropertyIsInstanceMethod = Object.prototype.hasOwnProperty('hasOwnProperty');

  console.log('Object.prototype:', Object.prototype);

}
