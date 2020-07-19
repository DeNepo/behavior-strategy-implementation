'use strict';

// Object.keys(anObject)

const menagerie = {
  swimming: 'mackerel',
  flying: 'crane',
  running: 'cheetah',
  jumping: 'spider',
};
console.log('menagerie:', menagerie);


// use a for ... in loop to create an array of all keys
const keysWithLoop = [];
for (let key in menagerie) {
  keysWithLoop.push(key);
}
console.log('keysWithLoop:', keysWithLoop);


// use Object.keys to create an array of all keys
const keysWithMethod = Object.keys(menagerie);
console.log('keysWithMethod:', keysWithMethod);


