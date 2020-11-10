'use strict';

// disclaimer: this file uses a for ... of loop!
//  you'll see soon enough why this example is included

// you can use a for ... of loop to build an object from array of entries
const menagerieEntries = [
  ['swimming', 'mackerel'],
  ['flying', 'crane'],
  ['running', 'cheetah'],
  ['jumping', 'spider'],
];
console.log(menagerieEntries);

const menagerie = {};
for (let keyValuePair of menagerieEntries) {
  const [key, value] = keyValuePair; // *
  menagerie[key] = value;
}

console.log(menagerie);
const expectedMenagerie = {
  swimming: 'mackerel',
  flying: 'crane',
  running: 'cheetah',
  jumping: 'spider',
};
const isPassing = deepCompare(menagerie, expectedMenagerie);
console.assert(isPassing, 'Test 1');


// * https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/


function deepCompare(actual, expect) {
  // are they the same thing?
  return actual === expect || Object.is(actual, expect)
    // compare arrays
    || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))
      // compare objects
      || Reflect.ownKeys(actual).length === Reflect.ownKeys(expect).length && Reflect.ownKeys(expect).every((key) => deepCompare(actual[key], expect[key])));
};
