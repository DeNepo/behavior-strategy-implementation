/* https://eslint.org/docs/rules/no-unreachable

  do not have lines of code that can never be reached
  extra lines make your code harder to understand and debug

*/

const reverseString = (toReverse = "") => {
  const reversed = toReverse.split("").reverse().join("");
  return reversed;
  console.log(reversed);
};

console.log(reverseString("hello"));

console.log(reverseString("potato"));
