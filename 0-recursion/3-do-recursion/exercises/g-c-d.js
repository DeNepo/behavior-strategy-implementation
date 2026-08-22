'use strict';

/**
 *
 *
 */
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

// -------- manual recursion --------

gcd(0, 12); // breaking down

gcd(12, 0); // breaking down

gcd(12, 6); // breaking down

gcd(6, 3); // breaking down

gcd(5, 6); // breaking down

