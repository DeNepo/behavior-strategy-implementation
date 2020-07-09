# Testing

All code is guilty until proven innocent.

> Program testing can be a very effective way to show the presence of bugs, but is hopelessly inadequate for showing their absence.
> - [Edsger Dijkstra](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra)

## Contents

- [Learning Objectives](#learning-objectives)
- [Study Tips](#study-tips)
- [Module Projects](#module-projects)
- Weekly Details:
  - Week 1: [Assignments](./week-1/README.md), [Lesson Plan](./week-1/index.html)
  - Week 2: [Assignments](./week-2/README.md), [Lesson Plan](./week-2/index.html)
  - Week 3: [Assignments](./week-3/README.md), [Lesson Plan](./week-3/index.html)
- Study Materials:
  - [Isolate](./isolate/index.html) - examples and exercises
  - [Integrate](./integrate/index.html) - projects to study
  - [Class Recordings](./class-recordings.md)
  - [Study Links](https://study.hackyourfuture.be) (external)
- [Curriculum](https://home.hackyourfuture.be/curriculum) (external)
- [HYF Home](https://home.hackyourfuture.be/) (external)

---

## Learning Objectives

### Programming Skills

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

[TOP](#testing)

---

## Study Tips

- Don't rush, understand!  Programming is hard.
  - The examples and exercises will still be there to study later.
  - It's better to fail tests slowly and learn from your mistakes than to pass tests quickly and not understand why.
- Practice [Pair Programming](https://study.hackyourfuture.be/collaborating/pair-programming): two people, one computer.
- Don't skip the examples!  Understanding and experimenting with working code is a very effective way to learn programming.
- Take a look through the [Learning From Code](https://study.hackyourfuture.be/learning/learning-from-code) guide for more study tips

[TOP](#testing)

---

## Module Projects

Projects in this module will be simple websites with `onclick` attributes that call a handler function.

- User interactions will be handled with `prompt`, `confirm` and `alert`
- Handler functions will use arrays and objects stored in script variables
- There will be tests

[TOP](#testing)
