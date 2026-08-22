'use strict';

/**
 *
 *
 */
const mystery = (n = 0) => {
  if (n < 10) {
    return n;
  } else {
    return (n % 10) + mystery(Math.floor(n / 10));
  }
};

console.log(mystery(4)); // 4
console.log(mystery(21)); // 3
console.log(mystery(12)); // 3
console.log(mystery(6)); // 6
console.log(mystery(312)); // 6
console.log(mystery(10000)); // 1
