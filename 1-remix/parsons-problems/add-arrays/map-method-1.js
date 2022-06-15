/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/60c649d3408198000190aec2 */

function addArrays(a1, a2) {
  if (a1.length !== a2.length) throw new Error();
  return a1.map((v, i) => v + a2[i]);
}
