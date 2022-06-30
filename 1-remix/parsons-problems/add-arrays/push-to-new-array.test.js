/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/5868e2f683b26841a1000444 */

/* this exercise has 0 distraction */

const addArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    throw new Error('you must pass in two arrays of the same length');
  }
  return 'ok';
};

describe('the program does an addition but raises an error if the length of one/both arrays vary', () => {
  it('should throw error if the arrays are not the same length', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3, 4];
    expect(() => addArrays(arr1, arr2)).toThrowError(
      'you must pass in two arrays of the same length',
    );
  });
});
