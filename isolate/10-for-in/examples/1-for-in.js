'use strict';

const menagerie = {
  swimming: 'mackerel',
  flying: 'crane',
  running: 'cheetah',
  jumping: 'spider',
};
console.log(menagerie);


// for ... in give you access to each key in the object
console.log('all object keys');
for (const key in menagerie) {
  console.log('- ' + key);
}

// you can use this and bracket notation to get each value
console.log('all object values');
for (const key in menagerie) {
  const value = menagerie[key];
  console.log('-' + value);
}
