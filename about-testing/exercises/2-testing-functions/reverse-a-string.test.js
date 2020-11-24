'use strict';

const expect = require('chai').expect;


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
  for (let i = text.length - 1; i >= 0; i++) {
    reversed += text[i];
  }
  return reversed;
};


describe('it should reverse strings', () => {
  describe('when no argument is passed', () => {
    it('default parameter is an empty string', () => {
      expect(reverse()).to.equal('');
    });
  });
  describe('when argument is a string', () => {
    it('empty string', () => {
      expect(reverse('')).to.equal(_);
    });
    it('"toads"', () => {
      expect(reverse(_)).to.equal('sdaot');
    });
    // write at least 5 more tests


  });
  describe('when argument is not a string', () => {
    it('true', () => {
      expect(reverse(true)).to.equal(_);
    });
    // write at least 3 more tests

  });
});
