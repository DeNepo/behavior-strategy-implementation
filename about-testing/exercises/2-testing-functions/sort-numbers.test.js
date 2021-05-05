'use strict';

/**
 * Sorts an array of numbers from smallest to largest.
 * Returns a new array without modifying the original array.
 * Does not need to support: NaN, Infinity, -Infinity.
 *
 * @param {number[]} [arrOfNumbers=[]] - The array of numbers to sort.
 * @returns {number[]} A new array with the same numbers, but sorted.
 * @example
 *
 * sortNumbers([1.5, 1, -1.5, 0, -1]);
 * // -> [-1.5, -1, 0, 1, 1.5]
 *
 * @example
 * sortNumbers([-1, 0, 1]);
 * // -> [-1, 0, 1]
 */
const sortNumbers = (arrOfNumbers = []) => {
  // create a copy of the argument to avoid side-effects
  const copiedAndSorted = [...arrOfNumbers];

  // sort the elements in the copied array
  copiedAndSorted.sort((a, b) => a - b);

  // return the copied & sorted array of numbers
  return copiedAndSorted;
};

describe('sortNumbers sorts an array of numbers', () => {
  // test positive numbers
  describe('', () => {});
  // test negative numbers
  describe('', () => {});
  // test decimal numbers
  describe('', () => {});
  // test everything all together
  describe('', () => {});
  // test for side-effects
  describe('', () => {});
});
