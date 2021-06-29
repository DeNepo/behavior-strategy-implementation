/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/60cab9c989d309000170ac65 */

/* this exercise has 0 distractors */

function addArrays(array1, array2) {
  if (array1.length !== array2.length) {
    throw new Error('Array lengths not same size');
  }

  return array1.reduce((arr, num, i) => {
    arr.push(num + array2[i]);

    return arr;
  }, []);
}
