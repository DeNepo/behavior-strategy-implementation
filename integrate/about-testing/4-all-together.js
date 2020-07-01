const assert = chai.assert;

/**
 * repeats a string a given number of times
 * @param {string} str - the string to repeat
 * @param {number} repeats - cannot be less than 0
 * @returns {string} the string, repeated
 */
const repeatString = (str, repeats) => {
  if (repeats < 0) {
    return 'repeats cannot be less than 0';
  }

  let repeated = '';
  for (let i = 0; i <= repeats; i++) {
    repeated += str;
  }
  return repeated;
};


// can you fix the function from reading the test results?
//  be sure to expand all the failing logs in the console!
describe('repeatString: repeats strings a given number of times', () => {
  it('repeats the empty string 3 times', () => {
    const expected = '';
    const actual = repeatString('', 3);
    assert.strictEqual(actual, expected);
  });
  it('repeats non-empty strings 3 times', () => {
    const expected = 'hihihi';
    const actual = repeatString('hi', 3);
    assert.strictEqual(actual, expected);
  });
  it('repeats empty strings 0 times', () => {
    const expected = '';
    const actual = repeatString('', 0);
    assert.strictEqual(actual, expected);
  });
  it('repeats non-empty strings 0 times', () => {
    const expected = '';
    const actual = repeatString('hi', 0);
    assert.strictEqual(actual, expected);
  });
  it('second argument must be greater than 0', () => {
    const expected = 'repeats cannot be less than 0';
    const actual = repeatString(':(', -1);
    assert.strictEqual(actual, expected);
  });
});





