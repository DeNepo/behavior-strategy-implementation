'use strict';

/**
 *
 *
 */
const sumDigits = (n = 0) => {
  if (n < 10) {
    return n;
  } else {
    return (n % 10) + sumDigits(Math.floor(n / 10));
  }
};

// -------- manual recursion --------

sumDigits(4); // breaking down

sumDigits(21); // breaking down

sumDigits(12); // breaking down

sumDigits(6); // breaking down

sumDigits(312); // breaking down

sumDigits(10000); // breaking down
