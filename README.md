# Behavior, Strategy, Implementation

> Be creative while inventing ideas, but be disciplined while implementing them.
>
> - [Amit Kalantri](https://amitkalantri.com/tag/quotes-about-creativity/)

In this module you will explore different ways to break down and solve coding challenges. Along with structured workflows for approaching challenges, you will learn the JavaScript you need to write clear and maintainable solutions including: reading and writing tests, higher order functions, arrays and object.

## Behavior

What does the function do? What are it’s arguments and it’s return value? How could you use it in a program? Behavior is all about what your function looks like "from the outside", without caring about what is written inside.

Functions behavior is generally described using **use cases**, **documentation** and/or **unit tests**:

<details>
<summary>Use Cases ("real-world" examples)</summary>

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

</details>

<details>
<summary>Documentation (JSDoc comment)</summary>

```js
/**
 * repeats a string a specific number of times
 * @param {string} [text=''] - the string to repeat. defaults to empty string
 * @param {number} [repetitions=1] - how many times to repeat. defaults to 1
 *  repetitions cannot be negative, and must be an integer
 * @return {string} the text repeated as many times as repetitions
 */
const repeatString = (text = '', repetitions = 0) => {
  // some code
};
```

</details>

<details>
<summary>Unit Tests (pass/fail assertions)</summary>

```js
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
```

</details>

## Strategy

How do you approach solving the problem? There are many strategies to solve the same problem! A way to practice strategy is to think of transforming the arguments to the return value in small steps, _focusing on the data not the code_. This is the realm of flow charts, diagrams, and pseudo-code.

One way to approach strategy is to solve the problem a few different ways by hand, writing what you expect to change in memory at each step. Like if you were the debugger and you couldn't see the source code. Using a pencil and paper is a the best way to go, pick a few test cases and see how you'd solve them manually.

Here are four possible strategies to approach repeating a string. Each one is written as block comment with step-by-step goals focusing on _what_ should happen at each step, not _how_ it will happen. This type of comment is helpful to include in your code:

<details>
<summary>Iterate until string is long enough</summary>

```js
/* iterating until the new string's length is correct

  repeatString(text, repetitions) =>
    1. calculate the final length for the new string
    2. create a new string to fill with many text's
    3. iterate as long as the new string is too short
      a. check if the new string is long enough
        stop if it is, keep going if it is not
      b. append text to the new
      c. repeat
    return: the new repeated string

*/
```

</details>

<details>
<summary>Iteration with a stepper variable</summary>

```js
/* iterating over the number of repetitions

  repeatString(text, repetitions) =>
    1. create a new string to fill with many text's
    2. create a stepper variable, starting at 0
    3. iterate from 0 to repetitions
      a. check if stepper is still less than repetitions
        keep going if it is, otherwise stop iterating
      b. append text to the new string
      c. increment the stepper
      d. repeat
    return: the new repeated string

*/
```

</details>

<details>
<summary>Recurse with base-case 0</summary>

```js
/* recursion with base-case 0

  i'm using 0 as the base-case because that is the fewest possible repetitions
  zero repetitions is an empty string, so if repetitions is 0 it will return ''

  otherwise i'll need to combine the text with a string that has one fewer reptitions

  repeatString(text, repetitions) =>
    base-case: repetitions is 0
      return: an empty string
    recursive case: repetitions is greater than 0
      nextRepetitions = subtract one from repetitions
      recursedValue = recursively call repeatString with text and nextRepetitions
      return: text + recursedValue


*/
```

</details>

<details>
<summary>Native JS methods</summary>

```js
/* use native .js methods

  repeatString(text, repetitions) =>
    1. make sure the data is the correct type and format for the method you're using
    2. use the method
    return: the result

*/
```

</details>

## Implementation

Which language features and which lines of code can you use to make your strategy a reality? There are many ways to code the same strategy. let's look at multiple implementations for each strategy described above, all of these functions will pass the unit tests written in the _Behavior_ section:

### Iterate Until String is Long Enough

<details>
<summary>While loop, true and break</summary>

```js
/* unconventional and pretty old-school
  there is a lot of reinventing the wheel
  while loops are designed to check conditions
  this is not the simplest solution to read or maintin
*/
const repeatString = (text = '', repetitions = 1) => {
  const finalLength = text.length * repetitions;
  let repeatedText = '';
  while (true) {
    if (repeatedText.length === finalLength) {
      break;
    }
    repeatedText = repeatedText + text;
  }
  return repeatedText;
};
```

</details>

<details>
<summary>While loop, logic in head</summary>

```js
/* the cleanest implementation for this strategy
  it uses the language feature designed for this type of strategy
*/
const repeatString = (text = '', repetitions = 1) => {
  const finalLength = text.length * repetitions;
  let repeatedText = '';
  while (repeatedText.length < finalLength) {
    repeatedText += text;
  }
  return repeatedText;
};
```

</details>

<details>
<summary>For loop with only a condition check</summary>

```js
/* not the best implementation, it's confusing to read
  this strategy does not use stepping, and for loops are designed for stepping
  implementing this strategy with a for loop is putting a square peg in a round hole

  when someone sees a for loop they expect it to be used like a for loop
  this implementation uses a for loop like a while loop
  the computer doesn't care, but the intention is confusing for other devs
*/
const repeatString = (text = '', repetitions = 1) => {
  const finalLength = text.length * repetitions;
  let repeatedText = '';
  for (; repeatedText.length < finalLength; ) {
    repeatedText += text;
  }
  return repeatedText;
};
```

</details>

### Iteration with Stepper Variable

<details>
<summary>While loop, true and break</summary>

```js
/* unconventional and pretty old-school
  there is a lot of reinventing the wheel
  while loops are designed to check conditions
  this is not the simplest solution to read or maintain
*/
const repeatString = (text = '', repetitions = 1) => {
  let repeatedText = '';
  let count = 0;
  while (true) {
    if (count === repetitions) {
      break;
    }
    repeatedText += text;
    count++;
  }
  return repeatedText;
};
```

</details>

<details>
<summary>While loop, condition in head</summary>

```js
/* a better way to user the while loop since the condition is known
  easier to read and more conventional than the previous implementation
  maybe you find this easier to read than a for loop
*/
const repeatString = (text = '', repetitions = 1) => {
  let repeatedText = '';
  let count = 0;
  while (count < repetitions) {
    repeatedText = repeatedText + text;
    count++;
  }
  return repeatedText;
};
```

</details>

<details>
<summary>For loop</summary>

```js
/* the cleanest implementation for this strategy
  it uses the language feature designed for stepping
*/
const repeatString = (text = '', repetitions = 1) => {
  let repeatedText = '';
  for (let count = 0; count < repetitions; count++) {
    repeatedText += text;
  }
  return repeatedText;
};
```

</details>

### Recursion with Base-Case 0

<details>
<summary>Ternary Operator</summary>

```js
// in all it's ES6 one-line glory
// beautiful to look at, harder to read
const repeatString = (text = '', repetitions = 1) =>
  repetitions === 0 ? '' : text + repeatString(text, nextRepetitions - 1);
```

</details>

<details>
<summary>Conditional Statement</summary>

```js
// good old fashioned (readable) conditional blocks
const repeatString = (text = '', repetitions = 1) => {
  if (repetitions === 0) {
    return '';
  } else {
    const nextRepetitions = repetitions - 1;
    const oneRepetitionShort = repeatString(text, nextRepetitions);
    return text + oneRepetitionShort;
  }
};
```

</details>

<details>
<summary>Conditional Statement (tail-call recursion)</summary>

```js
/* this implementation is "backwards compatible"
  that means that it has a different signature (the extra `repeated` parameter)
  but can still replace previous implementations without breaking anything
*/
const repeatString = (text = '', repetitions = 1, repeated = '') => {
  if (repetitions === 0) {
    return repeated;
  } else {
    const nextRepeated = repeated + text;
    const nextRepetitions = repetitions - 1;
    return repeatString(text, nextRepetitions, nextRepeated);
  }
};
```

</details>

### Native JS Methods

<details>
<summary>Sting.prototype.repeat</summary>

```js
// short and sweet, no room for mistakes
const repeatString = (text = '', repetitions = 1) => text.repeat(repetitions);
```

</details>

<details>
<summary>Array.prototype.fill</summary>

```js
// less clear and more complex, but still pretty clear to read
const repeatString = (text = '', repetitions = 1) => {
  const oneEntryPerRepetition = Array(repetitions).fill(text);
  const repeatedString = oneEntryPerRepetition.join('');
  return repeatedString;
};
```

</details>

## Contents

- [Getting Started](#getting-started)
  - [In the Browser](#in-the-browser)
  - [In Node.js](#in-Node-js)
- [Study Tips](#study-tips)
- [About Programming](#about-programming)
- [Learning Objectives](#learning-objectives)
- [Suggested Study](#suggested-study)
- Break-Down
  - [Week 1](#week-1)
  - [Week 2](#week-2)
  - [Week 3](#week-3)
- [Class Recordings](#class-recordings)
- [study.hackyourfuture.be](https://study.hackyourfuture.be)
- [home.hackyourfuture.be](https://home.hackyourfuture.be/)

---

## Getting Started

> You will need [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) on your computer to study this material

1. Clone this repository:
   - `git clone git@github.com:HackYourFutureBelgium/behavior-strategy-implementation.git` (SSH)
   - `git clone https://github.com/HackYourFutureBelgium/behavior-strategy-implementation.git` (HTTPS)
   - `gh repo clone HackYourFutureBelgium/behavior-strategy-implementation` (GH CLI)
1. `cd` into the repository
   - `cd behavior-strategy-implementation`

### In the Browser

> Using a browser with good DevTools will make your life easier: [Chromium](http://www.chromium.org/getting-involved/download-chromium), [FireFox](https://www.mozilla.org/en-US/firefox/new/), [Edge](https://www.microsoft.com/edge), [Chrome](https://www.google.com/chrome/)

1. Install or update the `study-lenses` package globally
   - `npm install -g study-lenses` (if you do not have it already)
   - `npm update -g study-lenses` (if you already have it installed)
2. Run the `study` command from your CLI
   - `study`
3. The material will open in your default browser, you're good to go!

> If you have a windows computer and get this error:
>
> - `... /study.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should take care of it ; )

### In Node.js

> The [debugger built into VSCode](https://code.visualstudio.com/Docs/editor/debugging) is very good, it's all you'll need. Don't forget to set [breakpoints](https://code.visualstudio.com/Docs/editor/debugging#_breakpoints)!

1. Install the repository's local dependencies:
   - `npm install`
2. Running files in `.js` (without .test):
   - _debugger_: open the file, select the debug option from your VSCode side-bar, choose the `Current JS File (no tests)` option, and click `|>`.
   - _console_: `node path/to/file.js`, simple and easy
3. Running files ending in `.test.js`:
   - _debugger_: open the file, select the debug option from your VSCode side-bar, choose the `Current JS File (with tests)` option, and click `|>`.
   - _console_: files ending in .test.js must be run with `mocha` -> `mocha path/to/file.test.js`. You will need to globally install mocha for this (`npm install -g mocha`)

[TOP](#behavior-strategy-implementation)

---

## Study Tips

- Don't rush, understand! Programming is hard.
  - The examples and exercises will still be there to study later.
  - It's better to fail tests slowly and learn from your mistakes than to pass tests quickly and not understand why.
- Don't skip the examples! Understanding and experimenting with working code is a very effective way to learn programming.
- Write lots of good comments, learn more about this in [./studying-javascript](./studying-javascript)
- Practice [Pair Programming](https://study.hackyourfuture.be/collaborating/pair-programming): two people, one computer.
- Take a look through the [Learning From Code](https://study.hackyourfuture.be/learning/learning-from-code) guide for more study tips

Not all assignments are created equal. These 3 emoji's will help you figure out how to spend your study time as effectively as possible.

- 🥚 `:egg:` - these assignments are required, they cover the base skills you'll need to move on.
- 🐣 `:hatching_chick:` - do your best to start these exercises. you don't need to finish or master them (yet) but getting the main idea will be helpful in coming weeks
- 🐥 `:hatched_chick:` - Have you finished all the 🥚's and started all the 🐣's? push yourself with these challenges!

[TOP](#behavior-strategy-implementation)

---

## Learning Objectives

What can you expect to learn in this module?

<details>
<summary>expand/collapse</summary>

- [Learning from Code](https://study.hackyourfuture.be/learning/learning-from-code)
  - Reading & understanding source code
  - Making small, incremental experiments
  - Copying & modifying others' code
- Using assertion libraries
  - _Failed assertions throw errors!_
  - Deep equality
  - Strict equality
  - Throws
- Using test reporters
  - `describe`
  - `it`
- TDD
  - Trust the tests!
  - Solving challenges one test at a time
- Debugging
  - Stepping through tests in the debugger
  - Reading test results to debug code behavior
  - Interpreting assertion errors

### Isolating JavaScript

- JS Operators
  - Implicit Coercion
  - Operator Precedence
- Control flow
  - `for in`, `for of`
  - `break`, `continue`
- Reference vs. Value
  - Comparing arrays & objects
  - Avoiding side-effects
- Arrays
  - Reading & writing entries
  - Array methods
- Objects
  - Reading and writing entries
  - Dot vs. Bracket access
  - `Object.keys`, `.values`, `.entries`
- Functions
  - The callstack
  - Recursion

### Integrating JavaScript

- Sharing arrays and objects between handler functions by reference

</details>
<br>

[TOP](#behavior-strategy-implementation)

---

## Suggested Study

Helpful resources for this module

<details>
<summary>expand/collapse</summary>
<br>

> [study.hackyourfuture.be/javascript](https://study.hackyourfuture.be/javascript)

### Exercises & Practice

- 🥚,🐣,🐥: [Solution Write-Ups](https://github.com/HackYourFutureBelgium/solution-write-ups) (important!)
  1. Fork the repository
  2. Clone your fork
  3. Push your work regularly so others can review it
- 🐣: [document-and-pass](https://github.com/HackYourFutureBelgium/document-and-pass)
- Study Lense Exercises
  - 🥚: [./about-testing](./about-testing): A quick introduction to `describe`, `it`, and `chai`
  - 🥚: [./isolate](./isolate): Practice core JavaScript without any user input or HTML/CSS
  - 🐣: [./function-design](./function-design): Learn a structured approach to understanding and solving coding challenges
  - 🐣: [./user-data](./user-data): An intro to using arrays and objects to store user data, integrated with HTML & CSS
  - 🐥: `./using-errors`: _coming soon_
- 🐣: Integrating JS with HTML & CSS
  - [4 challenges](https://github.com/HackYourFutureBelgium/debugging-integrate-week-1)
  - [6 challenges](https://github.com/HackYourFutureBelgium/debugging-project-week-1)
  - [shared program data](https://github.com/HackYourFutureBelgium/debugging-integrate-week-2)
  - [user data in an array](https://github.com/HackYourFutureBelgium/testing-integrate-week-1)
  - [array of numbers](https://github.com/HackYourFutureBelgium/array-of-numbers)
  - [favorite words](https://github.com/HackYourFutureBelgium/favorite-words)
- 🐥: More Coding Challenges:
  - [fuzz testing](https://hackyourfuturebelgium.github.io/fuzz)
  - [rolling-scopes-school](https://github.com/rolling-scopes-school/js-assignments)
  - [Functions and Arrays](https://github.com/ironhack-labs/lab-javascript-functions-and-arrays/)
  - [Advanced Collection Methods](https://github.com/ironhack-labs/lab-javascript-advanced-collection-methods)
  - [Native Array Methods](https://github.com/gSchool/native-array-methods-exercises/)
  - [clue](https://github.com/ironhack-labs/lab-javascript-clue/)
  - [JavaScript-Koans](https://github.com/HackYourFutureBelgium/JavaScript-Koans/tree/master/src) (1-4)

> Are we missing a great set of exercises? Send a PR!

### Reading Code

- [Code Reading Exercises](https://github.com/neontribe/code-reading-club/blob/trunk/exercises.md)
- [Learning from Code](https://study.hackyourfuture.be/learning/learning-from-code)
- [Links from `solution-write-ups`](https://github.com/HackYourFutureBelgium/solution-write-ups#helpful-links)
- More code to read
  - [dinanathsj29/javascript-exercise-beginners](https://github.com/dinanathsj29/javascript-exercise-beginners)
  - [KBPsystem777](https://github.com/KBPsystem777/JSexercises)
  - [JavaScript Questions](https://github.com/lydiahallie/javascript-questions/)

### About Testing

- [FunFunFunction](https://www.youtube.com/watch?v=Eu35xM76kKY&list=PL0zVEGEvSaeF_zoW9o66wa_UCNE3a7BEr):
  1. [Writing tests for personal projects](https://www.youtube.com/watch?v=ib2Pt9_zciA)
  1. [Why Unit Tests?](https://www.youtube.com/watch?v=Eu35xM76kKY)
  1. [Your First Tests](https://www.youtube.com/watch?v=XsFQEUP1MxI)
- Oliverjam
  - [roman-numeral-tdd-codealong](https://github.com/oliverjam/roman-numeral-tdd-codealong)
  - [learn-unit-testing](https://github.com/oliverjam/learn-unit-testing)

### JS References & Tutorials

#### Reference vs. Values

- [Academind](https://www.youtube.com/watch?v=9ooYYRLdg_g)
- [Mosh video](https://www.youtube.com/watch?v=fD0t_DKREbE)
- [CodeBurst article](https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c)
- [Just JavaScript](https://github.com/HackYourFutureBelgium/just-javascript/tree/master/06-Equality-of-Values)
- [Janke Learning](https://github.com/janke-learning/reference-vs-value)
- [javascript.info](https://javascript.info/object-copy#comparison-by-reference)

### Higher-Order Functions

- [FunFunFunction](https://medium.com/humans-create-software/a-dirt-simple-introduction-to-higher-order-functions-in-javascript-b33bf9e19056)
- [The Coding Train](https://www.youtube.com/watch?v=H4awPsyugS0)
- [Traversy](https://www.youtube.com/watch?v=rRgD1yVwIvE)
- [damcosset](https://dev.to/damcosset/higher-order-functions-in-javascript-4j8b)
- [bitsrc](https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad)
- [Mosh](https://programmingwithmosh.com/javascript/what-are-higher-order-functions-in-javascript/)

#### Arrays

- [JS Tutor Video](https://www.youtube.com/watch?v=W1NTK09o-vM)
- [Coding with Mosh](https://www.youtube.com/watch?v=oigfaZ5ApsM)
- [30 Days of JavaScript](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/05_Day/05_day_arrays.md) (stop at array methods)
- [javascript.info](https://javascript.info/array) (just the beginning)
- `for of` loops
  - [javascript.info](https://javascript.info/array#loops)
  - [Coding Train](https://www.youtube.com/watch?v=Y8sMnRQYr3c)
- Array Methods
  - [javascript.info](https://javascript.info/array-methods)
  - FunFun: [Map](https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2), [Reduce Basics](https://www.youtube.com/watch?v=Wl98eZpkp-c&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=3)
  - [CYF](https://codeyourfuture.github.io/syllabus-london/js-core-3/array-methods.html)
  - [Una Kravets](https://css-tricks.com/an-illustrated-and-musical-guide-to-map-reduce-and-filter-array-methods/)
  - [Cheat Sheet](https://jrsinclair.com/javascript-array-methods-cheat-sheet)
  - Oliverjam: [learn-map-filter](https://github.com/oliverjam/learn-map-filter), [tdd-array-methods](https://github.com/oliverjam/tdd-array-methods)

#### Objects

- [javascript.info](https://javascript.info/object)
- [Just JavaScript](https://github.com/HackYourFutureBelgium/just-javascript/tree/master/07-Properties)
- [dots vs brackets](https://www.youtube.com/watch?v=7lQ31dJEYoM) (video)
- [dots vs brackets](https://github.com/janke-learning/dots-vs-brackets) (example)
- `for ... in`
  - [javascript.info](https://javascript.info/object#the-for-in-loop)
  - [`for in`, vs `for of`](https://alligator.io/js/for-of-for-in-loops/)
  - [a video](https://www.youtube.com/watch?v=prl73KRkB34)
  - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
  - [w3schools](https://www.w3schools.com/jsref/jsref_forin.asp)
- Object Transformations
  - [tutorialcup](https://www.tutorialcup.com/javascript/object-to-array-in-javascript.htm)
  - [chrisburgin](https://medium.com/chrisburgin/javascript-converting-an-object-to-an-array-94b030a1604c)
  - [steve griffith](https://www.youtube.com/watch?v=VmicKaGcs5g) (video)
  - [all things javascript](https://www.youtube.com/watch?v=A0g7sga28Zg) (video)
  - [stackoverflow](https://stackoverflow.com/questions/38824349/how-to-convert-an-object-to-an-array-of-key-value-pairs-in-javascript)
- Arrays of Objects
  - [short, sweet, with a loop](https://www.youtube.com/watch?v=ivNWS9s7vhA) (video)
  - [Sorting an Array of Objects](https://www.youtube.com/watch?v=0d76_2sksWY) (video)
  - [another Sorting](https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/) (video+article)
  - [Search from Array of Objects](https://www.youtube.com/watch?v=US63Q6AL0GI) (video)
  - [Create, Update and Loop](https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/) (article)
  - [The Coding Train](https://www.youtube.com/watch?v=fBqaA7zRO58) (video)

#### Recursion

- [FunFunFunction](https://www.youtube.com/watch?v=k7-N8R0-KY4&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=7)
- [javascriptutorial](https://www.javascripttutorial.net/javascript-recursive-function/)
- [Beau](https://www.youtube.com/watch?v=vPEJSJMg4jY)

</details>
<br>

[TOP](#behavior-strategy-implementation)

---

## Week 1

- Reference vs. Value & side-effects
- Using arrays
- Testing: `describe`, `it` and `chai`
- Analyzing code challenge solutions
- The Function Design Workflow

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

- Reference vs. Value
  - [Academind](https://www.youtube.com/watch?v=9ooYYRLdg_g)
  - [Mosh video](https://www.youtube.com/watch?v=fD0t_DKREbE)
  - [CodeBurst article](https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c)
  - [Just JavaScript](https://github.com/HackYourFutureBelgium/just-javascript/tree/master/06-Equality-of-Values)
- Isolate (examples):
  - `arrays`
  - `reference-vs-value`
- [About Testing](./about-testing?hyf)
- [Read the `solution-write-ups` README](https://github.com/HackYourFutureBelgium/solution-write-ups)

### During Class

#### Before Break

- Isolate:
  - `reference-vs-value`
  - `side-effects`

#### After Break

- `about-testing`:
  - Quickly step through the examples and take questions
  - Breakpoints will become very important
  - So will understanding the different step buttons in your devtools
- `function-design`:
  - Step through a Function Design example together
- Introduction to _Solution Write-Ups_

### After Class

No project this week, but you are encouraged to add new pages to your JS Study Guide web pages.

</details>
<br>

[TOP](#behavior-strategy-implementation)

---

## Week 2

Higher-Order Functions and Functional Array Methods

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

- The Coding Train: [Higher-Order Functions](https://www.youtube.com/watch?v=H4awPsyugS0)
- FunFunFunction:
  - [Higher-Order Functions](https://medium.com/humans-create-software/a-dirt-simple-introduction-to-higher-order-functions-in-javascript-b33bf9e19056)
  - [Map](https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2)
  - [Reduce Basics](https://www.youtube.com/watch?v=Wl98eZpkp-c&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=3)
- Isolate (examples):
  - `the-callstack`
  - `higher-order-functions`
  - `functional-array-methods`

### During Class

#### Before Break

- Isolate
  - The Callstack
  - Higher Order Functions

#### After Break

- Isolate
  - Function Array Methods

### After Class

No project this week, but a group project next week. To prepare for next week's project you can study [Abstracting Behavior](https://github.com/HackYourFutureBelgium/debugging/tree/master/interact/5-abstracting-behavior) from the Debugging module

</details>
<br>

[TOP](#behavior-strategy-implementation)

---

## Week 3

- Iterating over objects using `for ... in` loops
- Using objects to store project data

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

- Objects
  - [javascript.info](https://javascript.info/object)
  - [Just JavaScript](https://github.com/HackYourFutureBelgium/just-javascript/tree/master/07-Properties)
  - [dots vs brackets](https://www.youtube.com/watch?v=7lQ31dJEYoM) (video)
  - [dots vs brackets](https://github.com/janke-learning/dots-vs-brackets) (example)
- `for ... in`
  - [javascript.info](https://javascript.info/object#the-for-in-loop)
  - [`for in`, vs `for of`](https://alligator.io/js/for-of-for-in-loops/)
  - [a video](https://www.youtube.com/watch?v=prl73KRkB34)
- [abstracting-behavior](https://github.com/HackYourFutureBelgium/debugging/tree/master/interact/5-abstracting-behavior) (examples)

### During Class

#### Before Break

- Isolate
  - Objects: 1, 2
  - `for-in`: 1, 2 and 4

#### After Break

- Review [abstracting-behavior](https://github.com/HackYourFutureBelgium/debugging/tree/master/interact/5-abstracting-behavior)
- Present this week's Project (with a capital "P')

### After Class

> Group Project, [favorite-word](https://github.com/HackYourFutureBelgium/favorite-word)

Bring it all together and prepare for the next module with this large project. Practice everything you've learned about JavaScript, problem solving and collaboration. There is no need to improve the UI in this project, you'll get plenty of time for that in the next module. The starter repository comes with these steps completed for you:

- Project Planning
- Repository Structure
- Description and tests for every .js except interactions
- Documentation for the `/src` folder
- A GitHub action to auto-generate docs so they are always up to date with master branch
- First 2 steps of the Dev Strategy

The rest is up to you! Here are some tips:

- Create one label for each folder in `/src`: `interactions`, `logic`, ...
- Create one milestone for each step in the dev-strategy
- Create an issue for each incomplete `.js` file in the `/src` folder
  - label each issue according to which folder the file is in (`interactions`, `logic`, ...)
  - milestone each issue according to it's step in the dev-strategy
  - assign each issue to a team member
- Develop each javascript file on a separate branch
  - create a PR for each branch when it is ready
  - link your PR to this task's issue
  - complete a code review before merging each file to master
- These types of functions can be developed on their own, they do not use other functions:
  - `prompts`, `logic`, `renders`
  - all of these files have tests
- Interactions cannot be developed until the functions they use are ready:
  - your team will need to coordinate!
  - you will need to reverse-engineer these using `index.re.html`

#### Checklist

Use this in your `group-project` issue:

```markdown
- [ ] [repo](https://github.com/_/_) (with a complete README)
- [ ] [live demo](https://_.github.io/_)
- [ ] [Figma planning document](_)
- [ ] [one issue per .js file](https://github.com/_/_/issues)
- [ ] [project board](https://github.com/_/_/projects/_)
- [ ] [one branch per step](https://github.com/_/_/branches)
- [ ] [one closed PR per step](https://github.com/_/_/pulls)
```

</details>
<br>

[TOP](#behavior-strategy-implementation)

---

## Class Recordings

- **Students**: Here you can find recordings of this module from past classes. Enjoy!
- **Coaches**: When sending your PR's with links please ...
  - Indicate which class you were teaching
  - Which week it was (if the module is more than 1 week)
  - Give your name
  - and a helpful description

## class-9-10

> [Charles](https://github.com/cpauwels), [Sali](https://github.com/Sali-Almurshidi) & [Evan](https://github.com/)

1. Week 1:
   - Sunday Part 1: [Reference vs. Value](https://vimeo.com/435470622)
   - Sunday Part 1: [Map, Reduce, Filter, Every](https://vimeo.com/435470848)
   - Sunday Part 2: [Mini-project intro](https://vimeo.com/435471018)
   - Sunday Part 3: [Recap & Homework](https://vimeo.com/435485572)
2. Week 2:
   - Sunday Part 1: [The Callstack](https://vimeo.com/437861452)
   - Sunday Part 1: [Higher Order Functions](https://vimeo.com/437861558)
   - Sunday Part 1: [Arrows vs. Functions](https://vimeo.com/437861744)
   - Sunday Part 1: [Error: EADDRINUSE](https://vimeo.com/437862520)
   - Sunday Part 2: [Reverse-Engineering](https://vimeo.com/437861934)
   - Sunday Part 2: [R-E & Assignments](https://vimeo.com/437862407)
3. Week 3:
   - Sunday Part 1: [Objects 1](https://vimeo.com/440023525)
   - Sunday Part 1: [Objects 2](https://vimeo.com/440023799)
   - Sunday Part 2: [User input in Objects](https://vimeo.com/440024065)

## class-11-12

> [Evan](https://github.com/), [Thibault](https://github.com/ThibaultLesuisse), [Joel](https://github.com/JoeCamacho)

1. [Week 1](https://meet.openknowledge.be/playback/presentation/2.0/playback.html?meetingId=48966e92bc14f80c53d450f9e59dc77e812b2f8b-1605437686426)
2. Week 2 - server crash :(
3. Week 3: [Objects Pt. 1](https://meet.openknowledge.be/playback/presentation/2.0/playback.html?meetingId=48966e92bc14f80c53d450f9e59dc77e812b2f8b-1606646910775), [Objects Pt. 2](https://vimeo.com/485101057), [Project Intro](https://vimeo.com/485101478)
