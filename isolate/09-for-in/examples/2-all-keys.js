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

const expectedKeys = ['swimming', 'flying', 'running', 'jumping'];
const keysTest = deepCompare(menagerieKeys, expectedKeys);
console.assert(keysTest, 'Keys Test');

// hoisted to keep it out of your way in the editor
// in one line so it's out of your way in JS Tutor

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));}
