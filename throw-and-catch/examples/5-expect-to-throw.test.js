// #todo

'use strict';

// this assertion checks to make sure a function throws an error
//  .toThrow is a challenge, not required for class
//  you can skip this example if you want to
describe('.toThrow', () => {
  it('should throw any error', () => {
    const throwsAnError = () => {
      null.someProperty;
    };
    expect(throwsAnError).toThrow();
  });
  it('should throw a specific message', () => {
    const shouldThrow = () => {
      null();
    };
    expect(shouldThrow).toThrow('null is not a function');
  });
  it('should throw a specific error type', () => {
    const shouldThrow = () => {
      null();
    };
    expect(shouldThrow).toThrow(TypeError);
  });
  it("being more specific doesn't make a difference", () => {
    const shouldThrow = () => {
      null();
    };
    expect(shouldThrow).toThrow(new TypeError('null is not a function'));
  });
  it('failing: does not throw', () => {
    const doesNotThrow = () => {
      'hello!';
    };
    expect(doesNotThrow).toThrow();
  });
});
