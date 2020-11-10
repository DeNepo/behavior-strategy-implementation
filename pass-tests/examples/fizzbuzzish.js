'use strict';

const expect = chai.expect;

/* Pass Tests

  how many solutions can you write to pass the same tests?

*/

// first solution
const usingAConditional = (numberToCheck = 0) => {
  if (numberToCheck % 3 === 0 && numberToCheck % 5 === 0) {
    return 'fizzbuzz';

  } else if (numberToCheck % 3 === 0) {
    return 'fizz';

  } else if (numberToCheck % 5 === 0) {
    return 'buzz';

  } else {
    return numberToCheck;
  }

};

// second solution
const usingATernary = (numberToCheck = 0) =>
  (numberToCheck % 3 === 0 && numberToCheck % 5 === 0)
    ? 'fizzbuzz'
    : (numberToCheck % 3 === 0)
      ? 'fizz'
      : (numberToCheck % 5 === 0)
        ? 'buzz'
        : numberToCheck;



// add your solutions into an array
const solutions = [usingAConditional, usingATernary];


// run the tests once for each solution
for (const solution of solutions) {

  describe(solution.name + ': fizbuzzish', () => {

    describe('default parameter', () => {
      it('should be "fizzbuzz"y', () => expect(solution()).to.equal('fizzbuzz'))
    });

    describe('not divisible by 3 or 5', () => {
      it('1', () => { expect(solution(1)).to.equal(1) });
      it('2', () => { expect(solution(2)).to.equal(2) });
      it('4', () => { expect(solution(4)).to.equal(4) });
      it('7', () => { expect(solution(7)).to.equal(7) });
      it('8', () => { expect(solution(8)).to.equal(8) });
      it('11', () => { expect(solution(11)).to.equal(11) });
      it('13', () => { expect(solution(13)).to.equal(13) });
      it('14', () => { expect(solution(14)).to.equal(14) });
      it('16', () => { expect(solution(16)).to.equal(16) });
      it('17', () => { expect(solution(17)).to.equal(17) });
    });

    describe('only divisible by 3', () => {
      const expectedValue = 'fizz';
      it('3', () => { expect(solution(3)).to.equal(expectedValue) });
      it('6', () => { expect(solution(6)).to.equal(expectedValue) });
      it('9', () => { expect(solution(9)).to.equal(expectedValue) });
      it('12', () => { expect(solution(12)).to.equal(expectedValue) });
      it('18', () => { expect(solution(18)).to.equal(expectedValue) });
      it('21', () => { expect(solution(21)).to.equal(expectedValue) });
      it('24', () => { expect(solution(24)).to.equal(expectedValue) });
      it('27', () => { expect(solution(27)).to.equal(expectedValue) });
      it('33', () => { expect(solution(33)).to.equal(expectedValue) });
      it('36', () => { expect(solution(36)).to.equal(expectedValue) });
    });

    describe('only divisible by 5', () => {
      const expectedValue = 'buzz';
      it('5', () => { expect(solution(5)).to.equal(expectedValue) });
      it('10', () => { expect(solution(10)).to.equal(expectedValue) });
      it('20', () => { expect(solution(20)).to.equal(expectedValue) });
      it('25', () => { expect(solution(25)).to.equal(expectedValue) });
      it('35', () => { expect(solution(35)).to.equal(expectedValue) });
      it('40', () => { expect(solution(40)).to.equal(expectedValue) });
      it('50', () => { expect(solution(50)).to.equal(expectedValue) });
      it('55', () => { expect(solution(55)).to.equal(expectedValue) });
      it('65', () => { expect(solution(65)).to.equal(expectedValue) });
      it('70', () => { expect(solution(70)).to.equal(expectedValue) });
    });


    describe('divisible by 5 and 3', () => {
      const expectedValue = 'fizzbuzz';
      it('15', () => { expect(solution(15)).to.equal(expectedValue) });
      it('30', () => { expect(solution(30)).to.equal(expectedValue) });
      it('45', () => { expect(solution(45)).to.equal(expectedValue) });
      it('60', () => { expect(solution(60)).to.equal(expectedValue) });
      it('75', () => { expect(solution(75)).to.equal(expectedValue) });
      it('90', () => { expect(solution(90)).to.equal(expectedValue) });
      it('105', () => { expect(solution(105)).to.equal(expectedValue) });
      it('120', () => { expect(solution(120)).to.equal(expectedValue) });
      it('135', () => { expect(solution(135)).to.equal(expectedValue) });
      it('150', () => { expect(solution(150)).to.equal(expectedValue) });
    });

    // // looking for a little challenge?
    // // uncomment these tests and add some guards to these functions

    // describe('numberToCheck is not a number', () => {
    //   const errorType = TypeError;
    //   const errorMessage = 'numberToCheck is not a number';
    //   it('true', () => { expect(() => solution(true)).to.throw(errorType, errorMessage) });
    //   it('null', () => { expect(() => solution(null)).to.throw(errorType, errorMessage) });
    //   it('"hi"', () => { expect(() => solution("hi")).to.throw(errorType, errorMessage) });
    //   it('[]', () => { expect(() => solution([])).to.throw(errorType, errorMessage) });
    //   it('{}', () => { expect(() => solution({})).to.throw(errorType, errorMessage) });
    //   it('()=>{}', () => { expect(() => solution(() => { })).to.throw(errorType, errorMessage) });
    // });

    // describe('numberToCheck is not an integer', () => {
    //   const errorType = Error;
    //   const errorMessage = 'numberToCheck is not an integer';
    //   it('0.5', () => { expect(() => solution(0.5)).to.throw(errorType, errorMessage) });
    //   it('-0.4', () => { expect(() => solution(-0.4)).to.throw(errorType, errorMessage) });
    //   it('-3.7', () => { expect(() => solution(-3.7)).to.throw(errorType, errorMessage) });
    //   it('4.1', () => { expect(() => solution(4.1)).to.throw(errorType, errorMessage) });
    //   it('5.13', () => { expect(() => solution(5.13)).to.throw(errorType, errorMessage) });
    //   it('-6.16', () => { expect(() => solution(-6.16)).to.throw(errorType, errorMessage) });
    //   it('-7.19', () => { expect(() => solution(-7.19)).to.throw(errorType, errorMessage) });
    //   it('8.21', () => { expect(() => solution(8.21)).to.throw(errorType, errorMessage) });
    //   it('9.24', () => { expect(() => solution(9.24)).to.throw(errorType, errorMessage) });
    //   it('-10.27', () => { expect(() => solution(-10.27)).to.throw(errorType, errorMessage) });
    // });


    // describe('numberToCheck is less than 0', () => {
    //   const errorType = RangeError;
    //   const errorMessage = 'numberToCheck is less than 0';
    //   it('-1', () => { expect(() => solution(-1)).to.throw(errorType, errorMessage) });
    //   it('-2', () => { expect(() => solution(-2)).to.throw(errorType, errorMessage) });
    //   it('-3', () => { expect(() => solution(-3)).to.throw(errorType, errorMessage) });
    //   it('-4', () => { expect(() => solution(-4)).to.throw(errorType, errorMessage) });
    //   it('-5', () => { expect(() => solution(-5)).to.throw(errorType, errorMessage) });
    //   it('-6', () => { expect(() => solution(-6)).to.throw(errorType, errorMessage) });
    //   it('-7', () => { expect(() => solution(-7)).to.throw(errorType, errorMessage) });
    //   it('-8', () => { expect(() => solution(-8)).to.throw(errorType, errorMessage) });
    //   it('-9', () => { expect(() => solution(-9)).to.throw(errorType, errorMessage) });
    //   it('-10', () => { expect(() => solution(-10)).to.throw(errorType, errorMessage) });
    // });

  });
}
