# Add Arrays

> from the [All Star Code Challenge #20](https://www.codewars.com/kata/5865a75da5f19147370000c7/solutions) on CodeWars

Create a function called addArrays() that combines two arrays of equal length, summing each element of the first with the corresponding element in the second, returning the "combined" summed array.
Raise an error if input arguments are not of equal length.

```js
addArrays([1, 2], [4, 5]); // => [5,7]
addArrays([1, 2, 3], [4, 5]); // => Error
```

Note:

Expect array input to either contain numbers or strings only
The function should also allow for concatenating string

```js
addArrays(['a'], ['b']); // => ["ab"]
```

## Unit Tests

```js
let random = function (num) {
  //returns a random integer from 0 - num
  return Math.floor(Math.random() * num);
};

let randomArray = function (array) {
  //returns a random number of random elements from the input array (repeats allowed)
  let output = [];
  let counter = 9;
  while (counter > 0) {
    output.push(array[random(array.length)]);
    counter--;
  }
  return output;
};

function mySol(array1, array2) {
  if (array1.length != array2.length) throw 'not same length';
  let array3 = [];
  for (let i = 0; i < array1.length; i++) {
    array3.push(array1[i] + array2[i]);
  }
  return array3;
}

describe('testing addArrays()', function () {
  it('should properly handle example test case', function () {
    Test.assertSimilar(addArrays([1, 2], [4, 5]), [5, 7]);
    Test.assertSimilar(
      addArrays(['a'], ['b']),
      ['ab'],
      'Should work with strings as well'
    );
  });

  it('should raise error with improper array length input', function () {
    Test.expectError(
      'Should raise an error when arguments are of varying length',
      function () {
        addArrays([1, 2, 3], [4, 5]);
      }
    );
    Test.expectError(
      'Should raise an error when arguments are of varying length',
      function () {
        addArrays([1], [4, 5]);
      }
    );
  });

  it('should accept empty arrays', function () {
    Test.assertSimilar(
      addArrays([], []),
      [],
      'Should allow for empty arrays as input'
    );
    Test.expectNoError(function () {
      addArrays([], []);
    });
  });

  it('should properly handle random arrays of integers', function () {
    let input1, input2, answer, output;
    let counter = 10;
    while (counter > 0) {
      input1 = randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
      input2 = randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
      answer = mySol(input1, input2);
      output = addArrays(input1, input2);
      Test.assertSimilar(answer, output);
      counter--;
    }
  });

  it('should properly handle random arrays of strings', function () {
    let letters = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    let input1, input2, answer, output;
    let counter = 10;
    while (counter > 0) {
      let input1 = randomArray(letters);
      let input2 = randomArray(letters);
      let answer = mySol(input1, input2);
      let output = addArrays(input1, input2);
      Test.assertSimilar(answer, output);
      counter--;
    }
  });
});
```
