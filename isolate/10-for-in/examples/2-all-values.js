'use strict';

// you can use a for ... in loop to get all the values from an object
const menagerie = {
  swimming: 'mackerel',
  flying: 'crane',
  running: 'cheetah',
  jumping: 'spider',
};
console.log(menagerie);

const menagerieValues = [];
for (let key in menagerie) {
  const value = menagerie[key];
  menagerieValues.push(value);
}

console.log(menagerieValues);

const expectedValues = ['mackerel', 'crane', 'cheetah', 'spider'];
const valuesTest = deepCompare(menagerieValues, expectedValues);
console.assert(valuesTest, 'Values Test');
