'use strict';

/**
 * this function reverses a string
 * @param {string} [text=''] - the string to reverse
 * @returns {string} the reversed text
 */
const reverse = (text = '') => {
  if (typeof text !== 'string') {
    return 'text is not a string';
  }

  let reversed = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
};

describe('it should reverse strings', () => {
  describe('when no argument is passed', () => {
    it('default parameter is an empty string', () => {
      expect(reverse()).toStrictEqual('');
    });
  });
  describe('when argument is a string', () => {
    it('empty string', () => {
      expect(reverse('')).toStrictEqual(_);
    });
    it('"toads"', () => {
      expect(reverse(_)).toStrictEqual('sdaot');
    });
    // write at least 5 more tests
  });
  describe('when argument is not a string', () => {
    it('true', () => {
      expect(reverse(true)).toStrictEqual(_);
    });
    // write at least 3 more tests
  });
});
