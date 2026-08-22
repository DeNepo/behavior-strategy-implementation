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
  return str.length === 0 // basecase
    ? str // turn-around
    : reverseString(str.slice(1)) + str[0]; // recursion, break-down, build-up
};

console.log(reverseString('asdf'));
console.log(reverseString('{-@-}'));
