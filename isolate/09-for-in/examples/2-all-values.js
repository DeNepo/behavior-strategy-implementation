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



// hoisted to keep it out of your way in the editor
// in one line so it's out of your way in JS Tutor
function deepCompare(actual, expect) { return actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || Reflect.ownKeys(actual).length === Reflect.ownKeys(expect).length && Reflect.ownKeys(expect).every((key) => deepCompare(actual[key], expect[key]))); };
