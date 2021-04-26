'use strict';

/**
 * converts an array of strings into a sentence
 *  removes all non-words and combines the words with a space
 * does not modify the argument
 * @param {string[]} arr
 * @returns {string} a sentence
 */
const sentenceIt = arr => {
  // these work, you need to use them with the right array methods
  const isWord = entry => {
    return /^[a-zA-Z]+$/.test(entry);
  };
  const twoWords = (acc, next) => {
    return `${acc} ${next}`;
  };

  // fill in the array method to use the logic above
  const sentenceIt = arr._(_)._(_, _);

  return sentenceIt;
};

describe('sentenceIt: converts an array of strings into a sentence', () => {
  describe('it correctly compares all entries', () => {
    it('returns an empty string for an empty array', () => {
      const expected = '';
      const actual = sentenceIt([]);
      expect(actual).toEqual(expected);
    });
    it('returns an empty string if there are no words', () => {
      const expected = '';
      const actual = sentenceIt(['1', '.', '=+/12']);
      expect(actual).toEqual(expected);
    });
    it('returns a sentence if there are only words', () => {
      const expected = ' hello frog princess';
      const actual = sentenceIt(['hello', 'frog', 'princess']);
      expect(actual).toEqual(expected);
    });
    it('creates a sentence using only the words', () => {
      const expected = ' hello frog princess';
      const actual = sentenceIt([
        '12',
        'hello',
        '----',
        'frog',
        'princess',
        '*',
      ]);
      expect(actual).toEqual(expected);
    });
  });
  describe('it uses the argument correctly', () => {
    it('does not modify the argument', () => {
      const arg = ['hello', 'goodbye'];
      sentenceIt(arg);
      expect(arg).toEqual(['hello', 'goodbye']);
    });
  });
});
