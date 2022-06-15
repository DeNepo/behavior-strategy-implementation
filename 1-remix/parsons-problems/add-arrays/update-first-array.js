/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/5d6a8a05c968e80001066720 */

/* this exercise has 0 distractors */

function addArrays(array1, array2) {
  var len = array1.length;

  if (len === array2.length) {
    for (var i = 0; i < len; i++) {
      array1[i] += array2[i];
    }

    return array1;
  }

  throw new Error();
}
