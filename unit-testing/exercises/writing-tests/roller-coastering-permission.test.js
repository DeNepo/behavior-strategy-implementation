// #todo

'use strict';

/**
 * lets you know if you are tall enough to ride the roller coaster
 * @param {number} [height=0] - the rider's height in centimeters
 * @returns {string} a message to display to the possible passenger
 */
const rollerCoasterPermission = (height = 0) => {
  if (typeof height !== 'number') {
    return 'height is not a number';
  } else if (height < 100) {
    return 'too short, sorry :(';
  } else if (height > 100) {
    return 'hop on the roller coaster!';
  } else {
    return 'just right, hop on!';
  }
};

describe('a function that tells you are tall enough', () => {
  describe('when height is not a number, the function says so', () => {
    it('true -> "height is not a number"', () => {
      const actual = rollerCoasterPermission(true);
      const expected = _;
      expect(actual).toEqual(expected);
    });
    it('"tall" -> "height is not a number"', () => {
      const expected = _;
      const actual = rollerCoasterPermission('tall');
      _;
    });
    // more tests?
  });
  describe('when height is a number', () => {
    it('numbers less than 100 return "too short, sorry :("', () => {
      const expected = 'too short, sorry :(';
      const actual = rollerCoasterPermission(_);
      _;
    });
    it('numbers equal to 100 return "just right, hop on!"', () => {
      const expected = 'just right, hop on!';
      const actual = rollerCoasterPermission(_);
      _;
    });
    it('numbers greater than 100 return "hope on the roller coaster!"', () => {
      const expected = 'hop on the roller coaster!';
      const actual = rollerCoasterPermission(_);
      _;
    });
    // more tests?
  });
  // more tests?
});
