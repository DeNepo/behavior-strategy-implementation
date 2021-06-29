# Fuzz Testing

Fuzz testing is when you use random inputs to test your function. Not completely random, the test cases will all have the correct structure but will have random values. so instead of using an array that looks like this:

- `[ "spain", "portugal", "france", "italy" ]`

You would generate random arrays of strings like this one and use them to test your function:

- `[ "8 #@H=+ /", "~asd i-b", ".089}|", "q<D> [=-" ]`

Why practice fuzz testing?

- You can test your functions against hundreds of more test cases than you ever could with manually written tests
- Randomly generated tests will catch mistakes you would never think of writing a test for
- Interpreting the test results will encourage you to think more abstractly since the test cases don't have any meaning

To study these exercises you'll need to have your console open, all test results will be logged there.

Enjoy!

---

## The Exercises

There's a lot of exercises in here, you should try to find at least 2 solutions to 3 of them. Here's what you can expect from each set of exercises:

- **/arrays-of-primitives**: Exactly that, functions that operate on arrays of primitive values.
- **/arrays-of-objects**: Exactly that, functions operate on arrays of objects.
- **/string-manipulation**: Practice doing things with strings. This can be a good chance to practice Regular Expressions.
- **/mathy**: Challenges that do mathy things with numbers, like generating Fibonacci sequences.
- **/guards**: Some of the tests will contain invalid arguments. Besides passing valid test cases, your solution will need to throw a specific error when the arguments are invalid.
- **/mysteries**: No instructions, no JSDoc, no starter code. Just you, an empty function, and some test cases. Good luck!

---

## Exercise Files

Each exercise folder has this folder structure, you will see this in VSCode but not in the browser:

```
/exercise-name
  /solutions
    /solution-name.js
  /fuzz.js - (required)
  /jsdoc.js
  /README.md
```

The folder's name will be used to automatically name your solution functions:

- `/exercise-name` -> `const exerciseName = () => {};`

Here's a some more about each item an exercise folder:

- **/fuzz.js** (required): The most important file. If a folder has a file named `fuzz.js` then it will appear as an exercise in the browser. `fuzz.js` must export two functions:
  - **`solution`**: A solution to this exercise that will be used to generate random test cases.
  - **`args`**: A function that returns an array of random arguments for testing your code. This function takes the [chance](https://chancejs.com/) library as an argument to help generate random values.
- **/solutions**: Complete or partial solutions to this challenge, you can easily switch between solutions when studying in the browser:
  - You can create new solution files from the browser.
  - Some exercises already have a few starter solutions with blanks to complete.
- **/jsdoc.js**: A JSDoc comment describing the challenge. If it exists, it will be displayed above the editor.
- **/README.md**: A markdown description of the challenge. If it exists it will be displayed above the solutions.
