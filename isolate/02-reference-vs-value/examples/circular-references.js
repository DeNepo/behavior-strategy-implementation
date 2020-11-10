'use strict';

/* Circular References

  Arrays and Objects can store references to themselves

*/


{ // circular object
  const a = {};
  a.x = a;
  console.log(a);
}

{ // circular array
  const a = [];
  a.push(a);
  console.log(a);
}



{ // circular objects
  const a = {};
  const b = {};
  a.b = b;
  b.a = a;
  console.log(a);
  console.log(b);
}

{ // circular arrays
  const a = [];
  const b = [];
  a.push(b);
  b.push(a);
  console.log(a);
  console.log(b);
}

{ // circular both
  const a = [];
  const b = {};
  a.push(b);
  b.x = a;
  console.log(a);
  console.log(b);
}
