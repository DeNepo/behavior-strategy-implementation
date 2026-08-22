'use strict';

/**
 * empty string      ->   the string
 * non-empty str   ->   ƒ(string without first char) + first char
 */
const reverseString = (str = '') => {
  //  |-- basecase --|
  if (str.length === 0) {
    return str; // turn-around
  } else {
    //         |  recursion    |     b-d      |   b-up  |
    return reverseString(str.slice(1)) + str[0];
  }
};

// -------- manual recursion --------

reverseString('asdf'); // breaking down
reverseString('sdf') + 'a';
reverseString('df') + 's' + 'a';
reverseString('f') + 'd' + 's' + 'a';
reverseString('') + 'f' + 'd' + 's' + 'a'; // base case
'' + 'f' + 'd' + 's' + 'a'; // turn around
'f' + 'd' + 's' + 'a'; // building up
'fd' + 's' + 'a';
'fds' + 'a';
('fdsa');

reverseString('{-@-}'); // breaking down
reverseString('-@-') + '{';
reverseString('@-}') + '-' + '{';
reverseString('-}') + '@' + '-' + '{';
reverseString('}') + '-' + '@' + '-' + '{';
reverseString('') + '}' + '-' + '@' + '-' + '{'; // base case
'' + '}' + '-' + '@' + '-' + '{'; // turn-around
'}' + '-' + '@' + '-' + '{'; // building up
'}-' + '@' + '-' + '{';
'}-@' + '-' + '{';
'}-@-' + '{';
('}-@-{');
