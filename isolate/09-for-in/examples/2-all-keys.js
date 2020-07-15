'use strict';

// you can use a for ... in loop to get all the keys from an object
const menagerie = {
  swimming: 'mackerel',
  flying: 'crane',
  running: 'cheetah',
  jumping: 'spider',
};
console.log(menagerie);

const menagerieKeys = [];
for (let key in menagerie) {
  menagerieKeys.push(key);
}

console.log(menagerieKeys);
console.assert(menagerieKeys[0] === 'swimming', 'Test 1');
console.assert(menagerieKeys[1] === 'flying', 'Test 2');
console.assert(menagerieKeys[2] === 'running', 'Test 3');
console.assert(menagerieKeys[3] === 'jumping', 'Test 4');
