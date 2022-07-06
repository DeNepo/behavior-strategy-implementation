# Behavior, Strategy, Implementation

> Be creative while inventing ideas, but be disciplined while implementing them.
>
> - [Amit Kalantri](https://amitkalantri.com/tag/quotes-about-creativity/)

- [Learning Objectives](#learning-objectives)
- [Behavior](#behavior)
- [Strategy](#strategy)
- [Implementation](#implementation)
- [Study Tips](#study-tips)

---

## Learning Objectives

<details>
<summary>Priorities: 🥚, 🐣, 🐥, 🐔 (click to learn more)</summary>
<br>

There is a lot to learn in this repository. If you can't master all the material
at once, that's expected! Anything you don't master now will always be waiting
for you to review when you need it. These 4 emoji's will help you prioritize
your study time and to measure your progress:

- 🥚: Understanding this material is required, it covers the base skills you'll
  need to move on. You do not need to finish all of them but should feel
  comfortable that you could with enough time.
- 🐣: You have started all of these exercises and feel you could complete them
  all if you just had more time. It may not be easy for you but with effort you
  can make it through.
- 🐥: You have studied the examples and started some exercises if you had time.
  You should have a big-picture understanding of these concepts/skills, but may
  not be confident completing the exercises.
- 🐔: These concepts or skills are not necessary but are related to this module.
  If you are finished with 🥚, 🐣 and 🐥 you can use the 🐔 exercises to push
  yourself without getting distracted from the module's main objectives.

---

</details>

### [1. Remix](./1-remix/)

Practice studying and remixing other people's solutions to coding challenges. Create your own solutions by mixing and matching pieces from other people's code.

- 🐣 **Reconstructing**: You can reconstruct a variety of solutions to the same challenge when they are presented as parsons problems.
- 🐣 **Analyzing**: You can analyze a function written at your level. This includes:
  - [ ] **Behavior**: Write documentation, test cases and use cases to describe the function's behavior.
  - [ ] **Strategy**: Describe the function's strategy using plain english.
  - [ ] **Implementation**: List the language features in a function and explain how each one is used.
  - [ ] **Small Changes**: You can think of 2+ changes to the function's _implementation_ that would not change it's _strategy_.
- 🐣 **Remixing** You can analyze several solutions to the same challenge then ...
  - [ ] **Write**: Your own solution by remixing the ones you studied.
  - [ ] **Explain**: How the other solutions inspired yours; what ideas did you take from them? what ideas did you _not_ take?
  - [ ] **Analyze**: Complete a write-up your own solution as though someone else wrote it.

### [2. Write](./2-write/)

- 🐣 **Function Design**:
  - [ ] **Writing Tests**: Given a working function, you can write passing test cases to describe it's behavior.
  - [ ] **Writing Functions**: You can design multiple solutions to the same code challenge, keeping notes about different experiments you tried along the way.
- [ ] 🐣 **Generating Documentation**: You can write a JSDoc comment for your solutions and run a script to generate markdown documentation.
- [ ] 🐣 **Fuzz Testing**: You write solutions that pass randomly generated test cases.
- 🐥 **Test Driven Development**: You can solve open-ended, ambiguous coding challenges at your level:
  - [ ] **Reading Docs**: You can understand what the function is supposed to do by reading it's JSDoc description.
  - [ ] **Writing Tests**: You can write test cases _before_ there is a function to test.
  - [ ] **Writing Functions**: You can write one function that passes the test cases you have prepared (even if it's just 1 test case!).
  - [ ] **Refactoring**: You can improve your function's implementation _without_ failing any test cases that were passing.
  - [ ] **Iterative Development**: You can repeat the TDD process until you are satisfied with your test cases and solution.
- [ ] 🐔 **Code Golf**: Write your solutions with the fewest characters possible! This won't help you write readable code, but it will make you think deeply about JS, your strategy and implementation.

### [3. Review](./3-review/)

- 🐣 **Continuous Integration**: You can check your code's quality _before_ pushing so your CI checks all pass.
  - [ ] **Formatting**
  - [ ] **Linting**
  - [ ] **Testing**
- [ ] 🐣 **Code Review**: You can use a checklist to give a thorough, positive and constructive review of your classmates' solutions.
- [ ] 🐔 **Code Coverage**: You can explain what code coverage is, why it's important, and can write unit tests with 100% code coverage.

---

## Behavior

What does the function do? What are it’s arguments and it’s return value? How could you use it in a program? Behavior is all about what your function looks like "from the outside", without caring about what is written inside the body.

Functions behavior is generally described using **documentation**, **unit tests** and **use cases**:

<details>
<summary><strong>Documentation (JSDoc comment)</strong></summary>

```js
/**
 * Repeats a string a specific number of times.
 *
 * @param {string} [text=''] - the string to repeat. defaults to empty string
 * @param {number} [repetitions=1] - how many times to repeat. defaults to 1
 *  Repetitions cannot be negative, and must be an integer.
 *
 * @return {string} The text repeated as many times as repetitions.
 */
```

</details>

<details>
<summary><strong>Unit Tests (pass/fail assertions)</strong></summary>

```js
import { repeatString } from './repeat-string.js';

describe('repeats a string any number of times:', () => {
  describe('an empty string', () => {
    it('should repeat "" 0 times', () => {
      expect(repeatString('', 0)).toEqual('');
    });
    it('should repeat "" 10 times', () => {
      expect(repeatString('', 10)).toEqual('');
    });
    it('should repeat "" 100 times', () => {
      expect(repeatString('', 100)).toEqual('');
    });
  });
  describe('zero repetitions', () => {
    it('a non-empty string repeated 0 times -> ""', () => {
      expect(repeatString('asdf', 0)).toEqual('');
    });
    it('a longer string repeated 0 times -> ""', () => {
      expect(repeatString('tommywalk', 0)).toEqual('');
    });
  });
  describe('standard use cases', () => {
    it('should repeat a phrase 3 times', () => {
      expect(repeatString('go to school', 3)).toEqual(
        'go to schoolgo to schoolgo to school'
      );
    });
    it('should repeat phrases with punctuation', () => {
      expect(repeatString('"Go!", said Dr. Seuss?', 2)).toEqual(
        '"Go!", said Dr. Seuss?"Go!", said Dr. Seuss?'
      );
    });
    it('should repeat strings with special characters', () => {
      expect(repeatString('\\ \n \t s', 2)).toEqual('\\ \n \t s\\ \n \t s');
    });
  });
  describe('default values', () => {
    it('should repeat 1 time by default (second parameter)', () => {
      expect(repeatString('asdf')).toEqual('asdf');
    });
    it('should repeat "" by default (first parameter)', () => {
      expect(repeatString()).toEqual('');
    });
  });
});
```

</details>

<details>
<summary><strong>Use Cases ("real-world" examples)</strong></summary>

```js
import { repeatString } from './repeat-string.js';

const userString = document.getElementById('user-text').value;
const userRepetitions = Number(document.getElementById('user-number').value);

const repeatedInput = repeatString(userString, userRepetitions);

document.getElementById('display-repeated').innerText = repeatedInput;
```

</details>

## Strategy

How do you approach solving the problem? There are many strategies to solve the same problem! A way to practice strategy is to think of transforming the arguments to the return value in small steps, _focusing on the data not the code_. This is the realm of flow charts, diagrams, and pseudo-code.

One way to approach strategy is to solve the problem a few different ways by hand, writing what you expect to change in memory at each step. Like if you were the debugger and you couldn't see the source code. Using a pencil and paper is a the best way to go, pick a few test cases and see how you'd solve them manually.

Here are four possible strategies to approach repeating a string. Each one is written as block comment with step-by-step goals focusing on _what_ should happen at each step, not _how_ it will happen. This type of comment is helpful to include in your code:

<details>
<summary><strong>Iterate until string is long enough</strong></summary>

```js
/* iterating until the new string's length is correct

  repeatString(text, repetitions) =>
    1. calculate the final length for the new string
    2. create a new string to fill with many text's
    3. iterate as long as the new string is too short
      a. check if the new string is long enough
        stop if it is, keep going if it is not
      b. append text to the new string
      c. repeat
    return: the new repeated string

*/
```

</details>

<details>
<summary><strong>Iteration with a stepper variable</strong></summary>

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
<summary><strong>Recursion with base-case 0</strong></summary>

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
<summary><strong>Built-In JS Methods</strong></summary>

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

</details>

<details>
<summary><strong>While Loop, true/break</strong></summary>

```js
/* unconventional and pretty old-school
  there is a lot of reinventing the wheel
  while loops are designed to check conditions, not iterate a fixed number of times
  this is not the simplest solution to read or maintain
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
<summary><strong>While Loop, logic in head</strong></summary>

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
<summary><strong>For Loop with only a condition</strong></summary>

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
<summary><strong>While Loop, true/break</strong></summary>

```js
/* unconventional and pretty old-school
  there is a lot of reinventing the wheel
  while loops are designed to check conditions, not iterate a fixed number of times
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
<summary><strong>While Loop, condition in head</strong></summary>

```js
/* a better way to use the while loop since the condition is known
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
<summary><strong>For Loop</strong></summary>

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
<summary><strong>If/Else with blocks</strong></summary>

```js
// good old fashioned conditional blocks
//  it takes more space but can be more clear to read
const repeatString = (text = '', repetitions = 1) => {
  if (repetitions === 0) {
    return '';
  } else {
    return text + repeatString(text, repetitions - 1);
  }
};
```

</details>

<details>
<summary><strong>If/Else with blocks</strong></summary>

```js
// conditional statements without the blocks
//  shorter, but still with helpful keywords
const repeatString = (text = '', repetitions = 1) => {
  if (repetitions === 0) return '';
  else return text + repeatString(text, repetitions - 1);
};
```

</details>

<details>
<summary><strong>Implicit Return with Ternary Operator</strong></summary>

```js
// in all it's ES6 two-line glory
//  the shortest implementation, do you think it's easiest to read?
const repeatString = (text = '', repetitions = 1) =>
  repetitions === 0 ? '' : text + repeatString(text, nextRepetitions - 1);
```

</details>

### Built-In JS Methods

</details>

<details>
<summary><strong>Sting.prototype.repeat</strong></summary>

```js
// short and sweet, no room for mistakes
const repeatString = (text = '', repetitions = 1) => text.repeat(repetitions);
```

</details>

<details>
<summary><strong>Array.prototype.fill</strong></summary>

```js
// less clear and more complex, but still pretty clear to read
const repeatString = (text = '', repetitions = 1) => {
  const oneEntryPerRepetition = Array(repetitions).fill(text);
  const repeatedString = oneEntryPerRepetition.join('');
  return repeatedString;
};
```

</details>

[TOP](#behavior-strategy-implementation)

---

## Study Tips

<details>
<summary>expand/collapse</summary>
<br>

- Don't rush, understand! Programming is hard.
  - The examples and exercises will still be there to study later.
  - It's better to fail tests slowly and learn from your mistakes than to pass
    tests quickly and not understand why.
- Don't skip the examples! Understanding and experimenting with working code is
  a very effective way to learn programming.
- Write lots of comments in the examples and exercises. The code in this
  repository is yours to study, modify and re-use in projects.
- Practice
  [Pair Programming](https://home.hackyourfuture.be/students/study-tips/pair-programming):
  two people, one computer.
- Take a look through the
  [Learning From Code](https://home.hackyourfuture.be/students/study-tips/learning-from-code)
  guide for more study tips

### Hashtags

There's so many examples and exercises in this repository, it's easy to forget
of what you still need to finish or what you want to review again. Luckily
VSCode is really good at searching through folders of code.

You can write hashtags in your comments while you're studying, then search for
those hashtags later so you don't miss anything. Here's some ideas:

- `// #todo, still a few blanks left` - search for `#todo` in Study Lenses or
  VScode to find all the exercises you still need to study
- `// #review, coercion is confusing this again next week` - search for
  `#review` to find the files you need to study again
- ... anything goes! Find the hashtags that work for you

### Study Board

Creating a project board on your GitHub account for tracking your study at HYF
can help you keep track of everything you're learning. You can create the board
at this link: `https://github.com/your_user_name?tab=projects`.

These 4 columns may be helpful:

- **todo**: material you have not studied yet
- **studying**: material you are currently studying
- **to review**: material you want to review again in the future
- **learned**: material you know well enough that you could help your classmates
  learn it

</details>

[TOP](#behavior-strategy-implementation)
