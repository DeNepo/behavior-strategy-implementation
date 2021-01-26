
'use strict';

const expect = require('chai').expect;

const repeatString = require('./repeat-string.js');

describe('repeats a string any number of times:', () => {
  describe('default values', () => {
    it('repetitions default should be 1', () => {
      expect(repeatString('asdf')).to.equal('asdf');
    });
    it('text default should be an empty string', () => {
      expect(repeatString().to.equal('');
    });
  });
  describe('an empty string', () => {
    it('0 times', () => {
      expect(repeatString('', 0)).to.equal('');
    });
    it('10 times', () => {
      expect(repeatString('', 10)).to.equal('');
    });
    it('100 times', () => {
      expect(repeatString('', 100)).to.equal('');
    });
  });
  describe('zero repetitions', () => {
    it('"asdf"', () => {
      expect(repeatString('asdf', 0)).to.equal('');
    });
    it('"tommywalk"', () => {
      expect(repeatString('tommywalk', 0)).to.equal('');
    });
  });
  describe('standard use cases', () => {
    it('repeat a phrase 3 times', () => {
      expect(repeatString('go to school', 3)).to.equal(
        'go to schoolgo to schoolgo to school'
      );
    });
    it('phrases with punctuation', () => {
      expect(repeatString('"Go!", said Dr. Seuss?', 2)).to.equal(
        '"Go!", said Dr. Seuss?"Go!", said Dr. Seuss?'
      );
    });
    it('special characters', () => {
      expect(repeatString('\\ \n \t s', 2)).to.equal('\\ \n \t s\\ \n \t s');
    });
  });
});
