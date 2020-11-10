'use strict';

// bracket notation
//  another way to work with key/value pairs

// object literal declaration
const greetings = {
  first: 'hi',
  last: 'bye'
};

// direct access to a key/value pair by key name (dot notation)
console.assert(greetings.first === 'hi', 'Test 1: first');
console.assert(greetings.last === 'bye', 'Test 1: last');


// indirect access using the value of another variable (bracket notation)
const arrival = 'first';
const departure = 'last';

console.assert(greetings[arrival] === 'hi', 'Test 2: first');
console.assert(greetings[departure] === 'bye', 'Test 2: last');


// if a variable's value does not exist in the object ...
const notAGreeting = 'toast';
console.assert(greetings[notAGreeting] === undefined, 'Test 3: undefined entries');


// new key/value pairs can be added with bracket notation
const concernedGreeting = 'concerned';
greetings[concernedGreeting] = 'are you ok?';
console.assert(greetings.concerned === 'are you ok?', 'Test 4: add entry');


// and can be deleted with bracket notation
delete greetings[concernedGreeting];
console.assert(greetings.concerned === undefined, 'Test 5: remove entry');


// https://github.com/HackYourFutureBelgium/just-javascript/tree/master/07-Properties
// https://github.com/janke-learning/dots-vs-brackets
