'use strict';

/**
 * Calculates the greatest common denominator of two integers.
 * 
 * base case:
 * 
 * recursive case:
 *
 */
const greatestCommonDenominator = (a, b) =>
  b === 0 ? a : greatestCommonDenominator(b, a % b);

console.log(greatestCommonDenominator(0, 12)); // 12
console.log(greatestCommonDenominator(12, 0)); // 12
console.log(greatestCommonDenominator(12, 6)); // 6
console.log(greatestCommonDenominator(6, 3)); // 3
console.log(greatestCommonDenominator(5, 6)); // 1
