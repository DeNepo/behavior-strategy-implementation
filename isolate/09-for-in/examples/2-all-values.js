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
console.assert(menagerieValues[0] === 'mackerel', 'Test 1');
console.assert(menagerieValues[1] === 'crane', 'Test 2');
console.assert(menagerieValues[2] === 'cheetah', 'Test 3');
console.assert(menagerieValues[3] === 'spider', 'Test 4');
