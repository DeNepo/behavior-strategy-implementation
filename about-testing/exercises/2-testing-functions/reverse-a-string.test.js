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
  for (let i = text.length - 1; i >= 0; i--) {
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
      expect(reverse('')).to.equal('');
    });
    it('"toads"', () => {
      expect(reverse('toads')).to.equal('sdaot');
    });
    // write at least 5 more tests
    it('chars but numbers', () => {
      expect(reverse('123')).to.equal('321');
    }); 
    it('toString', () => {
      let num = 16
      expect(reverse(num.toString(10))).to.equal('61');
    });
    it('NaN', () => {
      expect(reverse(NaN)).to.equal('text is not a string');
    });
    it('capital letters', () => {
      expect(reverse('ABC')).to.equal('CBA');
    });
    it(';:.?', () => {
      expect(reverse(';:.?')).to.equal('?.:;');
    });
    
  });
  describe('when argument is not a string', () => {
    let msg = 'text is not a string';
    it('true', () => {
      expect(reverse(true)).to.equal(msg);
    });
    // write at least 3 more tests
    it('number', () =>{
      expect(reverse(123)).to.equal(msg);
    });
    it('NaN', () =>{
      expect(reverse(NaN)).to.equal(msg);
    });
    it('object', () =>{
      let car = {type:"Fiat", model:"500", color:"white"}
      expect(reverse(car)).to.equal(msg);
    });

  });
});
