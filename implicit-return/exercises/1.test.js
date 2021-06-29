/*
  can this be refactored to an implicit return?
*/

const areSameType = (value1, value2) => {
  return typeof value1 === typeof value2;
};

describe('areSameType: checks if two values have the same type', () => {
  it('should return true when both values are the same type', () => {
    expect(areSameType(-3, 0)).toEqual(true);
  });
  it('should return false when the values have different types', () => {
    expect(areSameType(3, '3')).toEqual(false);
  });
});
