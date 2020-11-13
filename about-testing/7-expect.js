"use strict";

/* chai.expect

  A very common syntax in testing is the `expect` syntax:

    expect(actualValue).to.equal(expecteValue);

  chai supports this syntax, and it is used in this repository


  https://www.chaijs.com/api/bdd/

*/

const expect = chai.expect;

describe("intro to expect", () => {
  describe("strict equality : ===", () => {
    it("passing", () => {
      expect(true).equal(true);
    });
    it("failing", () => {
      expect(true).equal(false);
    });
  });
  describe(".to : for readability", () => {
    // you can add .to. in your tests to make it more readable
    // this won't change how the test works
    it("passing", () => {
      expect(true).to.equal(true);
    });
    it("failing", () => {
      expect(true).to.equal(false);
    });
  });
  describe("deep equality", () => {
    // to compare arrays and objects you will need .deep
    it("passing", () => {
      expect(true).to.deep.equal(true);
    });
    it("failing", () => {
      expect(true).to.deep.equal(false);
    });
  });

});









