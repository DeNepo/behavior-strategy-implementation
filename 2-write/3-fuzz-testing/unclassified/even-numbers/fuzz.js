export const solution = (arr) => {
  return arr.filter((entry) => entry % 2 === 0);
};

export const args = (chance) => {
  const randomNumbers = [];
  const arraySize = Math.floor(Math.random() * 10);
  for (let i = 0; i < arraySize; i++) {
    randomNumbers.push(chance.integer({ min: -999999999, max: 999999999 }));
  }
  return [randomNumbers];
};
