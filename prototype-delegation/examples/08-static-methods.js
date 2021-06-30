'use strict';

/* Static Methods

  Static methods are called directly on the class
  they also live on the class

*/



{

  const entriesOfObjectInstance = Object.entries({ a: 1, b: 2 });
  const entriesIsStatic = Object.hasOwnProperty('entries');

  const keysOfObjectInstance = Object.keys({ a: 1, b: 2 });
  const keysIsStatic = Object.hasOwnProperty('keys');

  const valuesOfObjectInstance = Object.values({ a: 1, b: 2 });
  const valuesIsStatic = Object.hasOwnProperty('values');


  console.log('Object own properties:', Object.getOwnPropertyNames(Object));

}


{

  const fromString = Array.from('xyz');
  const fromIsStaticMethod = Array.hasOwnProperty('from');

  const isArrayArray = Array.isArray([]);
  const isArrayString = Array.isArray('');
  const isArrayIsStaticMethod = Array.hasOwnProperty('isArray');


  console.log('Array own properties:', Object.getOwnPropertyNames(Array));
}


{

  const fromCharCode89 = String.fromCharCode(89);
  const fromCharCodeIsStaticMethod = String.hasOwnProperty('fromCharCode');

  console.log('String own properties:', Object.getOwnPropertyNames(String));
}



