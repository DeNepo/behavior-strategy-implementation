'use strict';

// object transformations allow you to use array methods!

const menagerie = {
  swimming: 'mackerel',
  flying: 'crane',
  running: 'cheetah',
  jumping: 'spider',
};
console.log('menagerie:', menagerie);

// create an array of key/value arrays & map them
const capitalizedEntries = Object.entries(menagerie)
  .map(entry => {
    const oldValue = entry[1];
    const newValue = oldValue.replace(/^\w/, c => c.toUpperCase());
    entry[1] = newValue;
    return entry
  });
console.log('capitalizedEntries:', capitalizedEntries);

// reconstruct an object with Object.fromEntries
const capitalizedMenagerie = Object.fromEntries(capitalizedEntries);
console.log('capitalizedMenagerie:', capitalizedMenagerie);
