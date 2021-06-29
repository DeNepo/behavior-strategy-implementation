/*
  can this be refactored to an implicit return?
*/

const isEven = (maybeEven = 0) => {
  if (maybeEven % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

describe('isEven: checks if a number is even or odd', () => {
  it('can check negative, odd numbers', () => {
    expect(isEven(-3)).toEqual(false);
  });
  it('can check negative, even number', () => {
    expect(isEven(-2)).toEqual(true);
  });
  it('can check zero', () => {
    expect(isEven(0)).toEqual(true);
  });
  it('can check positive, odd numbers', () => {
    expect(isEven(7)).toEqual(false);
  });
  it('can check positive, even numbers', () => {
    expect(isEven(12)).toEqual(true);
  });
  it('has an even default parameter', () => {
    expect(isEven()).toEqual(true);
  });
});
