'use strict';

/**
 * Reverses a string.
 * 
 * base case:
 *    empty string      ->   the string
 * recursive case:
 *    non-empty str   ->   ƒ(string without first char) + first char
 */
const reverseString = (str = '') => {
  const isBaseCase = str.length === 0; // must use argument(s)
  if (isBaseCase) {
    const turnAround = str;
    return turnAround;
  } else {
    // recursive case
    const breakDown = str.slice(1); // must use argument(s)
    const recursion = reverseString(breakDown);
    const buildUp = recursion + str[0]; // must use recursion
    return buildUp;
  }
};

console.log(reverseString('asdf'));
console.log(reverseString('{-@-}'));
