/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5ae4e6e3f7f98ce2380003d4 */

/* this exercise has 2 distractors */

function updateLight(current) {
  const lights = ['green', 'yellow', 'red'];
  return lights[(lights.indexOf(current) + 1) % lights.length];
}

const lights = 'green', 'yellow', 'red'; // distractor
lights[(lights.indexOf(current) + 1) % lights.length]; // distractor
