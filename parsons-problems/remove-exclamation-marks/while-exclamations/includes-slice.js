/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c3b87b60eaa400010537e8 */

/* this exercise has 2 distractors */

function removeExclamationMarks(s) {
  while (s.includes('!')) {
    let index = s.indexOf('!');
    s = s.slice(0, index).concat(s.slice(index + 1, s.length));
  }

  return s;
}

s.slice(0, index).concat(s.slice(index + 1, s.length)); // distractor
let s = s.slice(0, index).concat(s.slice(index + 1, s.length)); // distractor
