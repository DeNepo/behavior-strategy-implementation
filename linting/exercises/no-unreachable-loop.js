/* https://eslint.org/docs/rules/no-unreachable-loop

  do not have lines of code that can never be reached
  extra lines make your code harder to understand and debug

*/

for (let i = 0; i <= 5; i++) {
  console.log(i);
  break;
}
