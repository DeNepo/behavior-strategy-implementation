'use strict';

/**
 *
 *
 */
const countOccurrences2 = (str = '', char = '') => {
  if (str === '') {
    return 0;
  } else {
    if (str[0] === char) {
      return 1 + countOccurrences2(str.slice(1), char);
    } else {
      return countOccurrences2(str.slice(1), char);
    }
  }
};

console.log(countOccurrences('asdf', 'a')); // 1
console.log(countOccurrences('asdf', 'x')); // 0
console.log(countOccurrences('ABCDEF', 'a')); // 0
console.log(countOccurrences('BANANA', 'A')); // 3
