'use strict';

// do you find yourself doing this?
const bread = 'for dipping';
const chili = 'a soup';
const milk = 'a white beverage';

// maybe it's time for this: object literal declaration
//  an object with key/value pairs
const foods = {
  bread: 'for dipping',
  chili: 'a soup',
  milk: 'drink it'
};

// access individual entries with a . followed by the key
console.assert(foods.bread === 'for dipping', 'Test 1: bread');
console.assert(foods.chili === 'a soup', 'Test 1: chili');
console.assert(foods.milk === 'drink it', 'Test 1: milk');

// non-existent keys have the value undefined
console.assert(foods.tables === undefined, 'Test 2: undefined entries');

// you can add key/value pairs like so:
foods.nuts = 'roasted, salted';
console.assert(foods.nuts === 'roasted, salted', 'Test 3: add entry');

// you can reassign keys like so:
foods.milk = 'goat or cow?';
console.assert(foods.milk === 'goat or cow?', 'Test 4: reset milk');

// and can remove key/value pairs like so:
delete foods.chili;
console.assert(foods.chili === undefined, 'Test 5: delete chili');
