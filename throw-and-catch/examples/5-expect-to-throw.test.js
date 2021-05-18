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
  it('should throw a specific error (1)', () => {
    const throwsWrongError = () => {
      null();
    };
    expect(throwsWrongError).toThrow(TypeError, 'null is not a function');
  });
  it('should throw a specific error (2)', () => {
    const throwsWrongError = () => {
      null();
    };
    expect(throwsWrongError).toThrow(new TypeError('null is not a function'));
  });
  it('failing: does not throw', () => {
    const doesNotThrow = () => {
      'hello!';
    };
    expect(doesNotThrow).toThrow();
  });
});
