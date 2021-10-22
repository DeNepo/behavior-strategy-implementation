// #todo

/**
 * Merges two sorted arrays into one sorted array.
 *
 * @param {number[]} left - One array of sorted numbers.
 * @param {number[]} right - The other array of sorted numbers.
 * @returns {number[]} The two arrays merged, with all values sorted.
 *
 * @author Tim Han - https://javascript.plainenglish.io/javascript-merge-sort-3205891ac060
 *
 * @example
 * merge([1, 2, 5], [3, 4]);
 * // -> [1, 2, 3, 4, 5]
 *
 * @example
 * merge([1, 3, 4], [2, 5]);
 * // -> [1, 2, 3, 4, 5]
 */
const merge = (left, right) => {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
};

/**
 * Sorts an array of numbers from smallest to greatest without modifying the origin array.
 *
 * @param {number[]} arr - An array of numbers to sort.
 * @returns {number[]} A new array containing the origin numbers, but sorted.
 *
 * @author Tim Han - https://javascript.plainenglish.io/javascript-merge-sort-3205891ac060
 *
 * @example
 * sort([2, 5, 4, 1, 3]);
 * // -> [1, 2, 3, 4, 5]
 *
 * @example
 * sort([3, 3, 1, 1, 2, 2]);
 * // -> [1, 1, 2, 2, 3, 3]
 */
export const sort = (unsortedArray) => {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return [...unsortedArray];
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(sort(left), sort(right));
};
