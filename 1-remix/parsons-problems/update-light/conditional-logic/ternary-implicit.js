/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5b16df8ca6d5f9f11e000a41 */

const updateLight = (current) =>
  current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green';

current == 'yellow' ? 'green' : current == 'red' ? 'yellow' : 'red'; // distractor
