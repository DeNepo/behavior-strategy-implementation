# Behavior, Strategy, Implementation

> Be creative while inventing ideas, but be disciplined while implementing them.
> - [Amit Kalantri](https://amitkalantri.com/tag/quotes-about-creativity/)

- Behavior: What does code do? What are it’s arguments and it’s return value? How could you use it in a program? Behavior is checked by tests
- Strategy: How could you transform the arguments to the return value in small steps, focusing on the data not the code. This is the realm of flow charts, diagrams, and pseudocode.
- Implementation: Which language features and which lines of code can you use to make your strategy a reality?

## Contents

- [Getting Started](#getting-started)
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
>
> Using a browser with good DevTools will make your life easier: [Chromium](http://www.chromium.org/getting-involved/download-chromium), [FireFox](https://www.mozilla.org/en-US/firefox/new/), [Edge](https://www.microsoft.com/edge), [Chrome](https://www.google.com/chrome/)

1. Install or update the `study-lenses` package globally
    - `$ npm install -g study-lenses` (if you do not have it already)
    - `$ npm update -g study-lenses` (if you already have it installed)
2. Clone this repository
    - `$ git clone git@github.com:HackYourFutureBelgium/debugging.git`
3. `cd` into the repository
    - `$ cd debugging`
4. Open the repository using `study`
    - `$ study`
5. The material will open in your default browser, you're good to go!

> If you have a windows computer and get this error:
>
> - `... /study.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should take care of it ; )

[TOP](#debugging)

---

## Study Tips

- Don't rush, understand!  Programming is hard.
  - The examples and exercises will still be there to study later.
  - It's better to fail tests slowly and learn from your mistakes than to pass tests quickly and not understand why.
- Don't skip the examples!  Understanding and experimenting with working code is a very effective way to learn programming.
- Write lots of good comments, learn more about this in [./studying-javascript](./studying-javascript)
- Practice [Pair Programming](https://study.hackyourfuture.be/collaborating/pair-programming): two people, one computer.
- Take a look through the [Learning From Code](https://study.hackyourfuture.be/learning/learning-from-code) guide for more study tips

[TOP](#debugging)

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


[TOP](#debugging)

---

## Suggested Study

Helpful resources for this module

<details>
<summary>expand/collapse</summary>
<br>

> [study.hackyourfuture.be/javascript](https://study.hackyourfuture.be/javascript)

## Repos of Exercises

- [Reading Codewars](https://github.com/HackYourFutureBelgium/reading-codewars) (important!)
- [Document and Pass](https://github.com/HackYourFutureBelgium/document-and-pass)

</details>
<br>

[TOP](#debugging)

---

## Week 1


<details>
<summary>expand/collapse</summary>
<br>

### Before Class

https://github.com/HackYourFutureBelgium/reading-codewars

#### Software Installations


#### Coding Prep


### During Class

#### Before Break

#### After Break


### After Class


```markdown
- [ ] [repo](https://github.com/_/_) (with a complete README)
- [ ] [live demo](https://_.github.io/_)
- [ ] [backlog](https://github.com/_/_/tree/master/planning/backlog.md)
- [ ] [Figma planning document](_)
- [ ] [development strategy](https://github.com/_/_/tree/master/planning/development-strategy.md)
- [ ] [project board](https://github.com/_/_/projects/_)
- [ ] [one branch per step](https://github.com/_/_/branches)
- [ ] [one closed PR per step](https://github.com/_/_/pulls)
```


</details>
<br>

[TOP](#debugging)

---

## Week 2


<details>
<summary>expand/collapse</summary>
<br>

### Before Class


### During Class

#### Before Break

#### After Break

### After Class

#### Checklist

</details>
<br>

[TOP](#debugging)

---

## Week 3



<details open>
<summary>expand/collapse</summary>
<br>

### Before Class



### During Class

#### Before Break


#### After Break


### After Class


</details>
<br>

[TOP](#debugging)

---

## Class Recordings

- **Students**: Here you can find recordings of this module from past classes.  Enjoy!
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

