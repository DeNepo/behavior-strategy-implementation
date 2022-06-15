export const staircase = (max = 0) => {
  let countUp = _;
  const result = [];
  while (++countUp < max) {
    result.push(countUp % 15 === 0 ? "_" : _ ? "Buzz" : _ ? "Fizz" : _);
  }
  return result;
};
