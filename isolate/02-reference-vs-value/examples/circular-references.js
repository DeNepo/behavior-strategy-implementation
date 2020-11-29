'use strict';

/* Circular References

  Arrays and Objects can store references to themselves

*/

{
  // circular object
  const a = {};
  a.x = a;
  console.log(a);
  console.assert(a.x === a);
  console.assert(a.x.x === a);
  // ...
}

{
  // circular array
  const a = [];
  a.push(a);
  console.log(a);
  console.assert(a[0] === a);
  console.assert(a[0][0] === a);
}

{
  // circular objects
  const a = {};
  const b = {};
  a.b = b;
  b.a = a;
  console.log(a);
  console.log(b);
  console.assert(a.b === b);
  console.assert(b.a === a);
  console.assert(a.b !== b.a);
}

{
  // circular arrays
  const a = [];
  const b = [];
  a.push(b);
  b.push(a);
  console.log(a);
  console.log(b);
  console.assert(a[0] === b);
  console.assert(b[0] === a);
  console.assert(a[0] !== b[0]);
}

{
  // circular both
  const a = [];
  const b = {};
  a.push(b);
  b.a = a;
  console.log(a);
  console.log(b);
  console.assert(a[0] === b);
  console.assert(b.a === a);
  console.assert(a[0] !== b.a);
}
