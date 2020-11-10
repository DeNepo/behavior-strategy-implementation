'use strict';

// you can use a for ... in loop to get all key/value pairs
const menagerie = {
  swimming: 'mackerel',
  flying: 'crane',
  running: 'cheetah',
  jumping: 'spider',
};
console.log(menagerie);

const menagerieEntries = [];
for (let key in menagerie) {
  const value = menagerie[key];
  const entry = [key, value];
  menagerieEntries.push(entry);
}

console.log(menagerieEntries);

const expectedEntries = [
  ['swimming', 'mackerel'],
  ['flying', 'crane'],
  ['running', 'cheetah'],
  ['jumping', 'spider'],
];
const isPassing = deepCompare(menagerieEntries, expectedEntries);
console.assert(isPassing, 'Test 1');


