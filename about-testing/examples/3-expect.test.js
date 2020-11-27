'use strict';

/* chai

  chai is an assertion library, assertion libraries are used to test code
  it's like console.assert but fancier
  - you can test for more than just truthiness and falsiness
  - if an assertion fails, a descriptive error is thrown

  A very common syntax in testing is the `expect` syntax:

    expect(actualValue).to.equal(expectedValue);

  It's a best practice to have only one `expect` inside each `it`

  chai is an assertion library that supports expect syntax
    it is what you will use for tests in this repo's exercises
  https://www.chaijs.com/api/bdd/

*/

const expect = require('chai').expect;

describe('about expect', () => {
  describe('strict equality : ===', () => {
    it('passing', () => {
      expect(true).equal(true);
    });
    it('failing', () => {
      expect(true).equal(false);
    });
  });

  describe('.to : for readability', () => {
    // you can add .to. in your tests to make it more readable
    // this won't change how the test works
    it('passing', () => {
      expect(true).to.equal(true);
    });
    it('failing', () => {
      expect(true).to.equal(false);
    });
  });

  describe('deep equality', () => {
    // to compare arrays and objects you will need .deep
    // this will check that they store the same values
    //  remember isolate/reference-vs-value?
    it('passing array', () => {
      expect([1, 2, 3]).to.deep.equal([1, 2, 3]);
    });
    it('failing array', () => {
      expect([1, '2', 3]).to.deep.equal([1, 2, 3]);
    });
    it('passing object', () => {
      expect({ a: 1, b: 2 }).to.deep.equal({ b: 2, a: 1 });
    });
    it('failing object', () => {
      expect({ a: 'x', b: 2 }).to.deep.equal({ b: 2, a: 1 });
    });
  });

  describe('.throw', () => {
    // this assertion checks to make sure a function throws an error
    // you wont' need to know this unless you study /using-errors
    it('passing', () => {
      const throwsCorrectError = () => {
        throw Error('hello');
      };
      expect(throwsCorrectError).to.throw(Error, 'hello');
    });
    it('failing: wrong error', () => {
      const throwsWrongError = () => {
        throw TypeError('userName is not a string');
      };
      expect(throwsWrongError).to.throw(Error, 'hello');
    });
    it('failing: does not throw', () => {
      const doesNotThrow = () => {};
      expect(doesNotThrow).to.throw(Error, 'hello');
    });
  });
});
