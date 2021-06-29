/*
  can this be refactored to an implicit return?
*/

const toObject = (name = '', age = 0) => {
  return {
    name,
    age,
  };
};

describe('toObject: wraps a name and an age into an object', () => {
  it('works for children', () => {
    expect(toObject('Raoul', 3)).toEqual({ name: 'Raoul', age: 3 });
  });
  it('works for teenagers', () => {
    expect(toObject('Samantha', 15)).toEqual({ name: 'Samantha', age: 15 });
  });
  it('works for young adults', () => {
    expect(toObject('Charlotte', 24)).toEqual({ name: 'Charlotte', age: 24 });
  });
  it('works for the oldest of people', () => {
    expect(toObject('Sandra', 111)).toEqual({ name: 'Sandra', age: 111 });
  });
  it('has default values', () => {
    expect(toObject()).toEqual({ name: '', age: 0 });
  });
});
