/*
  can this be refactored to an implicit return?
*/

const addOneToEach = (numbers = []) => {
  const oneBigger = [];
  for (const number of numbers) {
    oneBigger.push(number + 1);
  }
  return oneBigger;
};

describe('addOneToEach: adds 1 to each item in an array of numbers', () => {
  it('can add to an array of negative numbers', () => {
    expect(addOneToEach([-2, -3, -1])).toEqual([-1, -2, 0]);
  });
  it('can add to an array of positive numbers', () => {
    expect(addOneToEach([6, 3, 4, 8])).toEqual([7, 4, 5, 9]);
  });
  it('can add to an array of mixed numbers', () => {
    expect(addOneToEach([-4, 4])).toEqual([-3, 5]);
  });
  it('does nothing to an empty array', () => {
    expect(addOneToEach([])).toEqual([]);
  });
  it('has an empty array default parameter', () => {
    expect(addOneToEach()).toEqual([]);
  });
});
