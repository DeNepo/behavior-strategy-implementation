'use strict';

/* to test if two arrays contain the same entries
  you need to check each and every entry separately!
  JavaScript does not have a native way to do this

  this process is called deep comparing
*/

const expected = [4, 100, null, 'hi!'];

const firstArr = [4, 100, null, 'hi!'];
const secondArr = [4, 'null', 'good bye'];

// you can do it manually, but that's a very bad idea
//  way too many ways to make a mistake
//  and it's not practical for large arrays
const manualCheckFirst =
  firstArr[0] === expected[0] &&
  firstArr[1] === expected[1] &&
  firstArr[2] === expected[2] &&
  firstArr[3] === expected[3];
console.assert(manualCheckFirst, 'Compare first (manual)');

const manualCheckSecond =
  secondArr[0] === expected[0] &&
  secondArr[1] === expected[1] &&
  secondArr[2] === expected[2] &&
  secondArr[3] === expected[3];
console.assert(manualCheckSecond, 'Compare second (manual)');

/* more commonly you will use a function that does this for you
  the function below will compare each item in an array
    returns true if the arrays are deeply equal
    returns false if they are not
  don't worry about understanding this function, just use it for now
    it's written for (relatively) easy studying in debugger & js tutor
    HINT: use breakpoints to skip past lines that call deepCompare
  soon you'll learn to deep compare with a professional assertion library (chai)
*/
// prettier-ignore
const deepCompare = (actual, expect) => {
  // are they the same thing?
  return actual === expect || Object.is(actual, expect)
    // compare arrays
    || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))
      // compare objects
      || Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));
};

const deepCompareFirst = deepCompare(firstArr, expected);
console.assert(deepCompareFirst, 'Compare first (with function)'); // break point here

const deepCompareSecond = deepCompare(secondArr, expected);
console.assert(deepCompareSecond, 'Compare second (with function)'); // break point here
