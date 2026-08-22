'use strict';

/**
 *
 *
 */
const factorial = (n = 0) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// -------- manual recursion --------

factorial(0); // breaking down

factorial(1); // breaking down

factorial(2); // breaking down

factorial(3); // breaking down

factorial(6); // breaking down

