'use strict';

/**
 * Reverses a string.
 * 
 * base case:
 *    empty string      ->   the string
 * recursive case:
 *    non-empty str   ->   ƒ(string without first char) + first char
 */
const reverseString = (str = '') =>
  // |    basecase     | t-a |    recursion    |     b-d     |  build-up |
  str.length === 0 ? str : reverseString(str.slice(1)) + str[0];

console.log(reverseString('asdf'));
console.log(reverseString('{-@-}'));
