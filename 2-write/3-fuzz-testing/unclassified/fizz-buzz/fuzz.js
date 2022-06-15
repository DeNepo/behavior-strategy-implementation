export const solution = (max = 0) => {
  const result = [];
  for (let i = 0; i < max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result;
};

export const args = (chance) => [chance.integer({ min: 0, max: 100 })];
