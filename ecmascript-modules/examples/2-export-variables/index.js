// #todo

debugger;

import { word, greet, MODULES_BECAME_STANDARD_YEAR } from './script.js';

const greetedPig = greet('pig');
console.log(greetedPig);

// this variable was declared with const in the other file
//  attempting to change it's value here will throw an error
MODULES_BECAME_STANDARD_YEAR = 2063;

// months was declared with const, what happens when you try to modify it here?
word = 'hi!';
