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
    return 'too short, sorry  :(';
  } else if (height > 100) {
    return 'hop on the roller coaster!';
  } else {
    return 'just right, hop on!';
  }
};

describe('a function that tells you are tall enough', () => {
  describe('when height is not a number', () => {
    it('passing true', () => {
      const actual = rollerCoasterPermission(true);
      const expected = _;
      expect(actual).toEqual(expected);
    });
    it('passing "tall"', () => {
      const expected = _;
      const actual = rollerCoasterPermission('tall');
      _;
    });
  });
  describe('when height is a number', () => {
    it('less than 100', () => {
      const expected = 'too short, sorry  :(';
      const actual = rollerCoasterPermission(_);
      _;
    });
    it('exactly 100', () => {
      const expected = 'just right, hop on!';
      const actual = rollerCoasterPermission(_);
      _;
    });
    it('greater than 100', () => {
      const expected = 'hop on the roller coaster!';
      const actual = rollerCoasterPermission(_);
      _;
    });
  });
});
