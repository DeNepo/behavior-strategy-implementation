# Function Design

Solving code challenges doesn't need to be like walking in the dark.
We can't provide you with a perfect recipe to solve every problem, but there are some steps you can take to learn a structured workflow.
The goal of the examples and exercises in this folder is to help you explore a _function design workflow_ that you can master
and apply in your own projects.

This README is a big-picture walk through this workflow, the `./examples` directory will go into more detail.
The format of these exercises will take a little time to get used to, but that's all part of the learning!

- [The Workflow](#the-workflow)
- <a href='./examples?hyf' target='_blank'>Examples</a> : contains a .js file for each step in the workflow for an example problem.
- <a href='./exercises?hyf' target='_blank'>Exercises</a> : contains only one .js file per problem. You will solve it step by step in the same file.
- [References](#references)

---

## The Workflow

0. Starter Code
1. Write Tests
1. Find a Strategy
1. Design Cycles
1. More Strategies

Your first instinct may be to just start writing a function hoping for the best.
This workflow will help you work against that instinct and build new ones.
You will first think about

1. how to describe the function's behavior (JSDoc description)
2. what types go in and out of your function (JSDoc @params & @returns)
3. how the function behaves (test cases)
4. how you can approach the problem (a strategy)
5. and finally ... what code to write (implementation)

One of the trickiest (but most important!) parts of this workflow will be writing tests for the challenge _before_ writing your solution.
Writing tests is not easy to learn but is worth the effort.
Writing tests will force you to understand the challenge from the outside in and will not let you get away with a half-understanding.
Building this understanding before writing your function will make the problem solving and debugging easier.

### 0. Starter Code

- <a href='./examples/repeat-a-string/0-starter-code.test.js?study' target='_blank'>./examples/repeat-a-string/0-starter-code.test.js</a>

Each challenge will come with some starter code that includes:

- a JSDoc describing the challenge
- test cases (sometimes empty, sometimes started)
- a secret solution that you can use to write tests

---

### 1. Write Tests

> some exercises will come with starter tests, that's just a start. add more!

- <a href='./examples/repeat-a-string/1-write-tests.test.js?study' target='_blank'>./examples/repeat-a-string/1-write-tests.test.js</a>

Don't rush this step! Taking a little extra time to think about your function's behavior and
to consider [_edge cases_](https://www.geeksforgeeks.org/dont-forget-edge-cases/) will help in more than one way:

1. You will better understand the problem, so solving it will be easier.
2. You can have more confidence in your solution since the tests are more thorough.
3. Debugging will be easier when you have a clear idea of the expected results.

In these exercises you will always write your tests by calling `solution()`, this is to use the variable declared in the testing loop. If you call a different function than `solution`, you will not be able to run your tests against different solutions.

To help you write good tests, each exercise has a compressed, complicated, and hard-to-read solution included in the file (don't cheat! honor code.).
You will use this `secretSolution` to test your tests. There's nothing more frustrating than trying to use broken tests.
If your tests are wrong, it becomes nearly impossible to debug your solution!
So be sure to run your tests against the `secretSolution` before testing your own solution.
If a test fails the `secretSolution` then you know the test is bad, adjust it until it passes before moving on.

Finally, don't worry yourself trying to write perfect tests for every possible case. You can always add more tests as you design your solution.

---

### 2. First Strategy

- <a href='./examples/repeat-a-string/2-first-strategy.test.js?study' target='_blank'>./examples/repeat-a-string/2-first-strategy.test.js</a>

Think of a first strategy for solving this challenge. You might write is as numbered steps, pseudo-code or a short paragraph, whatever helps you most.

Anything goes! This is a chance to think big and imagine new ways you could approach this problem without worrying about how you will code it. You'll explore different implementations in the next step.

---

### 3. Design Cycles

- <a href='./examples/repeat-a-string/3-design-cycles.test.js?study' target='_blank'>./examples/repeat-a-string/3-design-cycles.test.js</a>

Try to write as many implementations as possible for your strategy. Keep all of the, especially the ones that don't work! In this step it's _very_ important that you keep all of your experiments and take notes on what you tried in each one. If you take good notes you can always come back to them when you have a similar problem in a project.

Be sure to run your tests after every small change you make in a function. And don't forget to double check which solutions are commented ;)

---

### 4. More Strategies

- <a href='./examples/repeat-a-string/4-more-strategies.test.js?study' target='_blank'>./examples/repeat-a-string/4-more-strategies.test.js</a>

So you've written a few solutions with your first strategy? Pick a new strategy and try solving it again!

You can often learn more from approaching the same problem in new ways than from always starting a new problem. Being very familiar with what you are trying to achieve frees your mind to be creative.

---

## References

- Similar Online Resources
  - Looking for more explanation and a softer start? take a look through these:
  - [The Learning Collective JS](http://tlcjs.org/index.html) - chapters 1, 2, 3
  - [Systematic Function Design in JS](https://wavded.com/post/htdp-functions/) - short article
- Good Code
  - [Improve Code Readability](https://dev.to/briwa/simple-ways-to-improve-code-readability-2n8c)
  - [Comments, Clean Code, JS](https://medium.com/better-programming/javascript-clean-code-comments-c926d5aae2cb)
  - [Comments: Best Practices](https://www.elegantthemes.com/blog/wordpress/how-to-comment-your-code-like-a-pro-best-practices-and-good-habits)
- [How to Design Programs](https://htdp.org/2019-02-24/part_preface.html)
  - This gold-standard textbook is written for the Racket programming language
  - The design workflow you will learn in `behavior-strategy-implementation` is inspired by HTDP then adapted for JS and Study Lenses
