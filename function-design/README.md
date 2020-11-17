# Function Design

> Design: to create, fashion, execute, or construct according to plan.
> - [Merriam Webster](https://www.merriam-webster.com/dictionary/design)

Solving code challenges doesn't need to be a random walk in the dark.  We can't provide you with a perfect recipe to solve every problem, but there are some steps you can take to learn a structured workflow.  The goal of the examples and exercises in this folder is to help you explore a _function design workflow_ that you can master and apply in your own projects.

This README is a big-picture walk through this workflow, the `./examples` directory will go into more detail. The format of these exercises will take a little time to get used to, but that's all part of the learning!

- [The Workflow](#the-workflow)
- <a href='./examples?hyf' target='_blank'>Examples</a>
- <a href='./exercises?hyf' target='_blank'>Exercises</a>
- [References](#references)

> Examples in this directory are spread across multiple files so you can follow the progression from one step to the next.  When you complete the exercises you will do them in a single file.

---

## The Workflow

0. Boilerplate
1. Signature
2. Description
3. Tests
4. Stub
5. Red, Green, Refactor
6. Pivot

This workflow may feel un-natural at the beginning. Your first instinct will likely be to just write a function and start filling it in, hoping for the best. This workflow is designed to work against that instinct and to help you build new ones.  This workflow builds a function from the outside in.  You will first think about how to describe your function, then how you would use it.  Only after you've fully described your function and understood it's behavior with test cases will you begin writing the function itself.

One of the trickiest (but most important!) parts of this workflow will be writing tests for the challenge _before_ writing your solution.  Writing tests is not easy to learn but is worth every effort.  Writing tests will force you to understand the challenge from the outside in and will not let you get away with half-understanding the problem.  Building this understanding before writing your function will make the problem solving and debugging much more approachable.


### 0. Boilerplate

> this step will be provided to you in the exercises

- <a href='./examples/reverse-a-string/0-boilerplate.test.js?study' target='_blank'>./examples/reverse-a-string/0-boilerplate.test.js</a>


Create an empty JSDoc comment, an empty function, and empty unit tests. This code is 100% generic to any coding challenge, writing it down will help get over blank-page syndrome:

---

### 1. Signature

> this step will be provided to you in the exercises

- <a href='./examples/reverse-a-string/1-signature.test.js?study' target='_blank'>./examples/reverse-a-string/1-signature.test.js</a>

At this point in your coding journey, a _function signature_ is simple enough:

1. How many parameters does a function take?
2. What types are the parameters?
3. What type does the function return?

To complete this step of the workflow, fill in the `params` and `returns` in your JSDoc comment.


---

### 2. Description

> this step will be provided to you in the exercises

- <a href='./examples/reverse-a-string/2-description.test.js?study' target='_blank'>./examples/reverse-a-string/2-description.test.js</a>

Describe your function's behavior and usage in more detail by completing the JSDoc comment, and by filling in the main test suite's description.

---

### 3. Tests

> some exercises will come with starter tests, that's just a start. add more!

- <a href='./examples/reverse-a-string/3-tests.test.js?study' target='_blank'>./examples/reverse-a-string/3-tests.test.js</a>

Don't rush this step!  Taking a little extra time to think about your function's behavior and to consider [_edge cases_](https://www.geeksforgeeks.org/dont-forget-edge-cases/) will help in more than one way:

1. You will better understand the problem, so solving it will be easier
2. You can have more confidence in your solution since the tests are more thorough.
3. Debugging will be easier when you have a clear idea of the expected results

In these exercises you will always write your tests by calling `solution`, this is to use the variable declared in the testing loop.  If you call a different function than `solution`, you will not be able to run your tests against different solutions.

To help you write good tests, each exercise has a compressed, complicated, and hard-to-read solution included in the file (don't cheat! honor code.).  You will use this `secretSolution` to test your tests.  There's nothing more frustrating than trying to use broken tests.  If your tests are wrong, it becomes nearly impossible to debug your solution!  So be sure to run your tests against the `secretSolution` before testing your own solution.  If a test fails the `secretSolution` then you know the test is bad, adjust it until it passes before moving on.

Finally, don't worry yourself trying to write perfect tests for every possible case.  You can always add more tests as you design your solution.

---

### 4. Stub

> this is the first step you will have to complete on your own

- <a href='./examples/reverse-a-string/4-stub.test.js?study' target='_blank'>./examples/reverse-a-string/4-stub.test.js</a>

Fill in the empty function with arguments and return type matching the JSDoc.  you will now want to comment out `secretSolution` in the `for-of` loop and uncomment the `stub`, run the tests and see what happens! (there will be many failures, that's to be expected)

---

### 5. Red, Green, Refactor

> some exercises will come with starter solutions, this is just a suggestion. create your own strategies as well!

- <a href='./examples/reverse-a-string/5-red-green-refactor.test.js?study' target='_blank'>./examples/reverse-a-string/5-red-green-refactor.test.js</a>

Enter the [TDD development cycle](https://www.youtube.com/watch?v=m43Ma_8TPH0):

1. **Red**: Run the tests and see which ones fail. Failing tests are not a personal failure, they're helpful information!  By carefully noting which tests pass and which ones fail you can build an understanding of what you need to fix in your code.
2. **Green**: Pick a specific failing test that you want to pass, only one! Working in small increments is the safest way to go. Make a small change or add a tiny bit of code and run the tests again.
    - You might find it helpful to create a new function instead of constantly changing the old one. You can start from scratch by copy-pasting the stub or you can copy-paste your last attempt and modify it. This way you can easily return to and old version, study the ideas you've tried so far, or copy-paste snippets from old functions into your newest attempt.
    - The `function-design` exercises are written so it's (relatively) easy to have many solutions side-by-side.  You can comment and uncomment different solutions in the testing loop to compare their behavior side-by-side.

3. **Refactor**: After passing your chosen test, take a step back and revaluate your code. Make some changes so it's easier to read and understand (but don't try to pass any new tests!).
    - Add some comments above your latest solution describing what worked and what didn't.
    - Consider adding more tests: does your code have a bug that wasn't caught? did you find a new use-case that wasn't covered?
    - Use comments in your function to point out important steps in the design workflow.
    - Change variable names to be make it more clear what role they play and how they are used
    - A this step in the workflow your file may get long and messy. To help keep things sane you can collapse functions you're not working on, and delete ones that you're finished learning from.

4. **Red**: repeat!

---

### 6. Pivot

- <a href='./examples/reverse-a-string/6-pivot.test.js?study' target='_blank'>./examples/reverse-a-string/6-pivot.test.js</a>

So you've solved the challenge?  Pick a new strategy and try solving it again!

You can often learn more from approaching the same problem in new ways than from always starting a new problem.  Being very familiar with what you are trying to achieve frees your mind to be more creative.

---

## References

- Similar Online Resources
  - Looking for more explanation and a softer start?  take a look through these:
  - [The Learning Collective JS](http://tlcjs.org/index.html) - chapters 1, 2, 3
  - [Systematic Function Design in JS](https://wavded.com/post/htdp-functions/) - short article
- Good Code
  - [Improve Code Readability](https://dev.to/briwa/simple-ways-to-improve-code-readability-2n8c)
  - [Comments, Clean Code, JS](https://medium.com/better-programming/javascript-clean-code-comments-c926d5aae2cb)
  - [Comments: Best Practices](https://www.elegantthemes.com/blog/wordpress/how-to-comment-your-code-like-a-pro-best-practices-and-good-habits)
- [How to Design Programs](https://htdp.org/2019-02-24/part_preface.html)
  - This gold-standard textbook is written for the Racket programming language
  - The design workflow you will learn in `behavior-strategy-implementation` is inspired by HTDP then adapted for JS and Study Lenses
