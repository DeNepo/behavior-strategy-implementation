'use strict';

// Object.entries(anObject)

const menagerie = {
  swimming: 'mackerel',
  flying: 'crane',
  running: 'cheetah',
  jumping: 'spider',
};
console.log('menagerie:', menagerie);

// use a for ... in loop to create an array of arrays
const entriesWithLoop = [];
for (let key in menagerie) {
  const value = menagerie[key];
  const entry = [key, value];
  entriesWithLoop.push(entry);
}
console.log('entriesWithLoop:', entriesWithLoop);

// use Object.entries to create an array of arrays
const entriesWithMethod = Object.entries(menagerie);
console.log('entriesWithMethod:', entriesWithMethod);
