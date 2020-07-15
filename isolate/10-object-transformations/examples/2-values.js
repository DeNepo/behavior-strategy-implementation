'use strict';

// Object.values(anObject)

const menagerie = {
  swimming: 'mackerel',
  flying: 'crane',
  running: 'cheetah',
  jumping: 'spider',
};
console.log('menagerie:', menagerie);

// use a for ... in loop to create and array of values
const valuesWithLoop = [];
for (let key in menagerie) {
  const value = menagerie[key];
  valuesWithLoop.push(value);
}
console.log('valuesWithLoop:', valuesWithLoop);

// use Object.values to create and array of values
const valuesWithMethod = Object.values(menagerie);
console.log('valuesWithMethod:', valuesWithMethod);


