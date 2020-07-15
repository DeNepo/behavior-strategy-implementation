'use strict';

// Object.fromEntries(arrayOfArraysLength2)

// the array of key/value arrays
const animalEntries = [
  ['swimming', 'mackerel'],
  ['flying', 'crane'],
  ['running', 'cheetah'],
  ['jumping', 'spider'],
];
console.log('animalEntries:', animalEntries);


// with a for ... of loop
const menagerieWithLoop = {};
for (let keyValuePair of animalEntries) {
  const [key, value] = keyValuePair;
  menagerieWithLoop[key] = value;
}
console.log('menagerieWithLoop:', menagerieWithLoop);

// with .reduce
const menagerieWithReduce = animalEntries
  .reduce((newObj, entry) => {
    const key = entry[0];
    const value = entry[1];
    newObj[key] = value;
    return newObj;
  }, {});
console.log('menagerieWithReduce:', menagerieWithReduce);

// with Object.fromEntries
const menagerieWithMethod = Object.fromEntries(animalEntries);
console.log('menagerieWithMethod:', menagerieWithMethod);
