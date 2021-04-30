# Behavior, Strategy, Implementation

> Be creative while inventing ideas, but be disciplined while implementing them.
>
> - [Amit Kalantri](https://amitkalantri.com/tag/quotes-about-creativity/)

In this module you will explore different ways to break down and solve coding challenges. Along with structured workflows for approaching challenges, you will learn the JavaScript you need to write clear and maintainable solutions including: reading and writing tests, higher order functions, arrays and object.

## Behavior

What does the function do? What are it’s arguments and it’s return value? How could you use it in a program? Behavior is all about what your function looks like "from the outside", without caring about what is written inside.

Functions behavior is generally described using **documentation**, **unit tests** and **use cases**:

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
```

</details>

<details>
<summary>Unit Tests (pass/fail assertions)</summary>

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

</details>

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
/* use built-in .js methods

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
  while (count < repetitions.length) {
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
  for (let count = 0; count < repetitions.length; count++) {
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
// some people find this easier to read than conditionals
const repeatString = (text = '', repetitions = 1) =>
  repetitions === 0 ? '' : text + repeatString(text, nextRepetitions - 1);
```

</details>

<details>
<summary>Conditional Statement</summary>

```js
// good old fashioned conditional blocks
// some people find this easier to read than ternaries
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

### Built-In JS Methods

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
   - if a `.test.js` file does not work, you can manually check on tests from the config options

> If you have a windows computer and get this error:
>
> - `... /study.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should take care of it ; )

### In Node.js

> The [debugger built into VSCode](https://code.visualstudio.com/Docs/editor/debugging) is very good, it's all you'll need. Don't forget to set [breakpoints](https://code.visualstudio.com/Docs/editor/debugging#_breakpoints)!

- Running files in `.js` (without `.test`):
  - _debugger_: open the file, select the debug option from your VSCode side-bar, choose the `Current JS File (no tests)` option, and click the triangle button. (hint you will need to use breakpoints)
  - _console_: `node path/to/file.js`, simple and easy
- Running files ending in `.test.js` or `.spec.js`:
  - _debugger_: open the file, select the debug option from your VSCode side-bar, choose the `Current JS File (with tests)` option, and click the triangle button. (hint: you will need to use breakpoints)
  - _console_: files ending in .test.js or .spec.js must be run with `npm run test -- path/to/file.test.js`.

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

### Priorities

If you can't finish all the material in this repository, that's expected! Anything you don't finish now will always be waiting for you to review when you need it. These 3 emoji's will help you prioritize your study time and to measure your progress:

- 🥚 `:egg:` - Understanding this material is required, it covers the base skills you'll need for this module and the next. You do not need to finish all of them but should feel comfortable that you could with enough time.
- 🐣 `:hatching_chick:` - Do your best to start this material. you don't need to master it or finish it but getting the main idea will be helpful for taking the next steps.
- 🐥 `:hatched_chick:` - Have you finished all the 🥚's and started all the 🐣's? push yourself with these challenges.

### Hashtags

There's sooo many examples and exercises in this repository, it's easy to forget of what you still need to finish or what you want to review again. Luckily VSCode is really good at searching through folders of code.

You can write hashtags in your comments while you're studying, then search for those hashtags later so you don't miss anything. Here's some ideas:

- `// #not-done, still a few blanks left` - search for `#not-done` in VScode to find all the exercises you've started and not finished
- `// coercion is confusing, #review this again next week` - search for `#review` to find the files you need to study again
- ... anything goes! Find the hashtags that work for you

### Module Project Boards

If you create a fork of this repository you can open a project board in your fork to track your progress through the module. Just 3 columns can be enough: _Todo_, _Doing_, _Done_.

[TOP](#behavior-strategy-implementation)

---

## Learning Objectives

What can you expect to learn in this module?

<details>
<summary>expand/collapse</summary>
<br>

- [Learning from Code](https://study.hackyourfuture.be/learning/learning-from-code)
  - Reading & understanding other people's code
  - Making small, incremental experiments
  - Copying & modifying others' code
- Reading and writing unit tests
  - `describe`
  - `it`
  - `expect(actual).toEqual(expected)`
- TDD
  - Trust the tests!
  - Solving challenges one test at a time
- Debugging
  - Stepping through tests in the debugger
  - Reading test results to debug code behavior
  - Interpreting assertion errors
- Reading and writing documentation
- Code review

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

- **Separate Repositories**
  - 🥚,🐣,🐥: **[Solution Write-Ups](https://github.com/HackYourFutureBelgium/solution-write-ups)** Learn to solve coding challenges by studying other people's solutions.
    1. Fork the repository
    2. Clone your fork
    3. Push your work regularly so others can study it
  - 🐣: **[document-and-pass](https://github.com/HackYourFutureBelgium/document-and-pass)**: write your own solutions and documentation to some coding challenges. Practice debugging and using testing libraries in VSCode
  - 🐣: [practice-code-review]() (_coming soon for week 3_)
- **In this Repo**
  - 🥚: **[./about-testing](./about-testing)**: A quick introduction to `describe`, `it`, and `expect`
  - 🥚: **[./array-methods](./array-methods)**: Learn array methods by first understanding the strategies they are designed for.
  - 🐣 **[./hoisting](./hoisting)**: That famous thing about JS! It's not so bad once you get it, the key to understanding hoisting is to understand the program life-cycle: _creation phase_ and _execution phase_. This chapter is more abstract, hoisting is something "invisible" about JavaScript program execution. These exercises will help you see hoisting by exploring the debugger at different points in program execution.
  - 🐣: **[./parsons-problems](./parsons-problems)**: Explore behavior, strategy and implementation by reconstructing different solutions to coding challenges.
  - 🐣: **[./function-design](./function-design)**: Learn a structured approach to understanding and solving coding challenges
- 🐥: **More Practice:**
  - [rolling-scopes-school](https://github.com/rolling-scopes-school/js-assignments)
  - [Functions and Arrays](https://github.com/ironhack-labs/lab-javascript-functions-and-arrays/)
  - [Advanced Collection Methods](https://github.com/ironhack-labs/lab-javascript-advanced-collection-methods)
  - [Native Array Methods](https://github.com/gSchool/native-array-methods-exercises/)
  - [clue](https://github.com/ironhack-labs/lab-javascript-clue/)
  - [JavaScript-Koans](https://github.com/HackYourFutureBelgium/JavaScript-Koans/tree/master/src) (1-4)
  - [fuzz](https://hackyourfuturebelgium.github.io/fuzz)
  - [KBPsystem777](https://github.com/KBPsystem777/JSexercises)
  - [JavaScript Questions](https://github.com/lydiahallie/javascript-questions/)

> Are we missing a great set of exercises? Send a PR!

### About Testing

- [FunFunFunction](https://www.youtube.com/watch?v=Eu35xM76kKY&list=PL0zVEGEvSaeF_zoW9o66wa_UCNE3a7BEr):
  1. [Writing tests for personal projects](https://www.youtube.com/watch?v=ib2Pt9_zciA)
  1. [Why Unit Tests?](https://www.youtube.com/watch?v=Eu35xM76kKY)
  1. [Your First Tests](https://www.youtube.com/watch?v=XsFQEUP1MxI)
- [js-unit-testing-guide](https://github.com/mawrkus/js-unit-testing-guide) (very detailed)

### Higher-Order Functions

- [FunFunFunction](https://medium.com/humans-create-software/a-dirt-simple-introduction-to-higher-order-functions-in-javascript-b33bf9e19056)
- [The Coding Train](https://www.youtube.com/watch?v=H4awPsyugS0)
- [Traversy](https://www.youtube.com/watch?v=rRgD1yVwIvE)
- [damcosset](https://dev.to/damcosset/higher-order-functions-in-javascript-4j8b)
- [bitsrc](https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad)
- [Mosh](https://programmingwithmosh.com/javascript/what-are-higher-order-functions-in-javascript/)

#### Array Methods

- [javascript.info](https://javascript.info/array-methods)
- FunFun: [Map](https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2), [Reduce Basics](https://www.youtube.com/watch?v=Wl98eZpkp-c&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=3)
- [CYF](https://codeyourfuture.github.io/syllabus-london/js-core-3/array-methods.html)
- [Una Kravets](https://css-tricks.com/an-illustrated-and-musical-guide-to-map-reduce-and-filter-array-methods/)
- [Cheat Sheet](https://jrsinclair.com/javascript-array-methods-cheat-sheet)
- Oliverjam: [learn-map-filter](https://github.com/oliverjam/learn-map-filter), [tdd-array-methods](https://github.com/oliverjam/tdd-array-methods)

#### Arrays of Objects

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

The best problem solvers don't start from nothing, they've seen many similar problems before and have learned to adapt other people's code to fit their programs.

This week take your first step to becoming an expert problem solver by studying the many ways people before you have solved common problems.

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

- Fork [solution-write-ups](https://github.com/HackYourFutureBelgium/solution-write-ups)
  - Read through the README, this will be your main exercise for the week.
  - create a new folder called `add-up-the-numbers-from-a-single-number`
  - create a README.md file in this folder using the `write-up-template.md`
  - create an empty javascript file called `sandbox.test.js`
- Read through [./about-testing/examples](./about-testing/examples) to be familiar with the syntax for `describe`, `it`, and `expect`
- Create an account on [Edabit](https://edabit.com)

### During Class

In class you will practice writing tests and analyzing solutions using a challenge from [Edabit](https://edabit.com/):

- [Add up the Numbers from a Single Number](https://edabit.com/challenge/4gzDuDkompAqujpRi)

#### Before Break

Description, Syntax, Test Cases and Use Cases.

- All together:
  - look through the examples at the beginning of this README. What is behavior, strategy and implementation?
  - go over the README from [solution-write-ups](https://github.com/HackYourFutureBelgium/solution-write-ups)
  - read through the first 4 sections in the example from [solution-write-ups](https://github.com/HackYourFutureBelgium/solution-write-ups)
- In small groups:
  - Complete the first 4 sections of the writeup for `Add up the Numbers ...`
  - You can use the most popular solution solution by **\_sir** to write your tests:
    ```js
    function addUp(num) {
      return (num * (num + 1)) / 2;
    }
    ```

#### After Break

Strategy, Implementation and Possible Refactors.

- All together:
  - read through the rest of the example in [solution-write-ups](https://github.com/HackYourFutureBelgium/solution-write-ups)
- In small groups:

  - practice writing up 2-3 solutions to the `Add up the Numbers ...` challenge (be sure to test them all!)
  - <details><summary>here's a few suggestions to study:</summary>

    ```js
    // _sir
    function addUp(num) {
      return (num * (num + 1)) / 2;
    }

    // Gabriel
    function addUp(num) {
      let sum = 0;
      for (let i = 1; i <= num; i++) {
        sum += i;
      }
      return sum;
    }

    // doodledob
    function addUp(num) {
      x = 0;
      while (num >= 0) {
        x += num;
        num--;
      }
      return x;
    }
    ```

    </details>

### After Class

Take your time this week to explore other people's code. In the past modules you've studied only a small part of what JS, now you're in the wild! You'll come across all sorts of JS features and new coding styles.

Complete as many write-ups as you can. No need to rush ahead! Take your time studying solutions at your level. It's more helpful to study a variety of solutions than to study a few hard ones:

- **[Solution Write-Ups](https://github.com/HackYourFutureBelgium/solution-write-ups)**

Here's two important JS concepts you should study while doing your write-ups:

- 🐣 **[./array-methods](./array-methods)**
- 🐣 **[./hoisting](./hoisting)**

These exercises will help you understand test cases, and be important for next week:

- 🐣 **[./about-testing](./about-testing)**

While these are great for when you need a little break:

- 🐣 **[./parsons-problems](./parsons-problems)**

</details>
<br>

[TOP](#behavior-strategy-implementation)

---

## Week 2

Learn to write unit tests and to write your own solutions one step at a time.

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

Read through the steps of Function Design and study the example

- [./function-design/README.md](./function-design/README.md)
- [./function-design/examples/reverse-a-string](./function-design/examples/reverse-a-string)

### During Class

#### Before Break

#### After Break

### After Class

Continue writing [Solution Write-Ups](https://github.com/HackYourFutureBelgium/solution-write-ups). To help you gain a deeper understanding of how to write your own solutions, take some time to study these exercises:

- 🐣 **[./about-testing](./about-testing)**
- 🐣 **[./parsons-problems](./parsons-problems)**
- 🐣 **[./function-design](./function-design)**

Just like last week, there's no reason to rush yourself. You can learn how to write tests and how to design functions with simple challenges just as well as with hard challenges. So find your level, settle in, and study as many problems as you can.

</details>
<br>

[TOP](#behavior-strategy-implementation)

---

## Week 3

Code Review! Practice reviewing

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

### During Class

#### Before Break

#### After Break

### After Class

> group exercises

[practice-code-review]() (_coming soon_)

#### Checklist

```markdown
```

</details>
<br>

[TOP](#behavior-strategy-implementation)

---

## Class Recordings

- **Students**: Here you can find recordings of this module from past classes. Enjoy!
  - Do you have a favorite? Send a PR giving it a :+1:
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

> [Evan](https://github.com/colevandersWands), [Thibault](https://github.com/ThibaultLesuisse), [Joel](https://github.com/JoeCamacho)

1. [Week 1](https://meet.openknowledge.be/playback/presentation/2.0/playback.html?meetingId=48966e92bc14f80c53d450f9e59dc77e812b2f8b-1605437686426)
2. Week 2 - server crash :(
3. Week 3: [Objects Pt. 1](https://meet.openknowledge.be/playback/presentation/2.0/playback.html?meetingId=48966e92bc14f80c53d450f9e59dc77e812b2f8b-1606646910775), [Objects Pt. 2](https://vimeo.com/485101057), [Project Intro](https://vimeo.com/485101478)
