# Repeat a String

## Docstring

```js
/**
 * repeats a string a specific number of times
 * @param {string} [text=''] - the string to repeat. defaults to empty string
 * @param {number} [repetitions=1] - how many times to repeat. defaults to 1
 *  repetitions cannot be negative, and must be an integer
 * @return {string} the text repeated as many times as repetitions
 */
```

## Unit Tests

```js
describe('repeats a string any number of times:', () => {
  describe('an empty string', () => {
    it('0 times', () => {
      expect(repeatString('', 0)).toEqual('');
    });
    it('10 times', () => {
      expect(repeatString('', 10)).toEqual('');
    });
    it('100 times', () => {
      expect(repeatString('', 100)).toEqual('');
    });
  });
  describe('zero repetitions', () => {
    it('"asdf"', () => {
      expect(repeatString('asdf', 0)).toEqual('');
    });
    it('"tommywalk"', () => {
      expect(repeatString('tommywalk', 0)).toEqual('');
    });
  });
  describe('standard use cases', () => {
    it('repeat a phrase 3 times', () => {
      expect(repeatString('go to school', 3)).toEqual(
        'go to schoolgo to schoolgo to school'
      );
    });
    it('phrases with punctuation', () => {
      expect(repeatString('"Go!", said Dr. Seuss?', 2)).toEqual(
        '"Go!", said Dr. Seuss?"Go!", said Dr. Seuss?'
      );
    });
    it('special characters', () => {
      expect(repeatString('\\ \n \t s', 2)).toEqual('\\ \n \t s\\ \n \t s');
    });
  });
  describe('default values', () => {
    it('repetitions default should be 1', () => {
      expect(repeatString('asdf')).toEqual('asdf');
    });
    it('text default should be an empty string', () => {
      expect(repeatString()).toEqual('');
    });
  });
});
```

## Use Cases

```js
// repeating a string inside an I/O loop
let repeatedText = '';
while (true) {
  const userString = promptForSomething('input a string to repeat');
  const userRepetitions = promptForNumber('how many times to repeat it?');
  const repeatedInput = repeatString(userString, userRepetitions);
  const userConfirmed = confirm(`is this correct: "${repeatedInput}"`);
  if (userConfirmed) {
    repeatedText = repeatedInput;
    break;
  }
}
console.log(repeatedText);
```

```js
// repeating a string from the DOM
const userString = document.getElementById('text-input').value;
const userRepetitions = document.getElementById('number-input').value;
const repeatedInput = repeatString(userString, userRepetitions);
document.getElementById('repeated-value-display').innerHTML = repeatedInput;
```
