// #todo

import { repeatString } from './repeat-string.js';

describe('repeatString: repeats a string', () => {
  describe('default parameters', () => {
    it('repeat once if no repetitions is passed', () => {
      expect(repeatString('asdf')).toEqual('asdf');
    });
    it('expect an empty string if no arguments are passed', () => {
      expect(repeatString()).toEqual('');
    });
  });
  describe('an empty string', () => {
    it('repeat an empty string 0 times -> ""', () => {
      expect(repeatString('', 0)).toEqual('');
    });
    it('repeat an empty string 10 times -> ""', () => {
      expect(repeatString('', 10)).toEqual('');
    });
    it('repeat an empty string 100 times -> ""', () => {
      expect(repeatString('', 100)).toEqual('');
    });
  });
  describe('zero repetitions', () => {
    it('repeat "asdf" 0 times -> ""', () => {
      expect(repeatString('asdf', 0)).toEqual('');
    });
    it('repeat "tommywalk" 0 times -> ""', () => {
      expect(repeatString('tommywalk', 0)).toEqual('');
    });
  });
  describe('standard use cases', () => {
    it('repeating a longer phrase 3 times', () => {
      expect(repeatString('go to school', 3)).toEqual(
        'go to schoolgo to schoolgo to school'
      );
    });
    it('repeating a phrase with punctuation', () => {
      expect(repeatString('"Go!", said Dr. Seuss?', 2)).toEqual(
        '"Go!", said Dr. Seuss?"Go!", said Dr. Seuss?'
      );
    });
    it('a string with special characters can be repeated', () => {
      expect(repeatString('\\ \n \t s', 2)).toEqual('\\ \n \t s\\ \n \t s');
    });
  });
});
