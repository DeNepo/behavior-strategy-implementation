'use strict';

/**
 * 
 * 
 */
const countOccurrences1 = (str = '', char = '') => {
  if (str === '') {
    return 0;
  } else {
    const increment = str[0] === char ? 1 : 0;
    return countOccurrences1(str.slice(1), char) + increment;
  }
};

console.log(countOccurrences('asdf', 'a')); // 1
console.log(countOccurrences('asdf', 'x')); // 0
console.log(countOccurrences('ABCDEF', 'a')); // 0
console.log(countOccurrences('BANANA', 'A')); // 3
s;
