/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/6074247d1252420001d90310 */

/* this exercise has 2 distractors */

function updateLight(current) {
  let lights = ['green', 'yellow', 'red'];
  return lights[lights.indexOf(current) + 1] || 'green';
}

return lights[lights.indexOf(current) + 1] && 'green'; // distractor
return lights[lights.indexOf(current) + 1] ? 'green'; // distractor
