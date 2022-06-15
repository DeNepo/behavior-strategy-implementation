/**
 * Converts the time from hours/minutes/second to milliseconds.
 *
 * @param {number} [h=0] - An integer between 0 and 23.
 * @param {number} [m=0] - An integer between 0 and 59.
 * @param {number} [s=0] - An integer between 0 and 59.
 * @returns {number} - The number of milliseconds since midnight.
 *
 * @example
 *
 * timeInMilliseconds(0, 0, 0); // 0
 *
 * @example
 *
 * timeInMilliseconds(0, 0, 1); // 1000
 *
 * @example
 *
 * timeInMilliseconds(0, 1, 1); // 61000
 */
export const timeInMilliseconds = (h = 0, m = 0, s = 0) => {};
