# TDD with LLMs

> This chapter is adapted from [Emerging Talent](https://github.com/MIT-Emerging-Talent/test-driven-development-with-large-language-models)

Practice integrating LLMs with your TDD workflow to quickly develop outstanding documentation, tests and solutions.

The [exercises](./exercises) are just one-sentence challenges. You can start with ours for inspiration, then let your imagination fly!

## TDD with LLMs: The Workflow

Here's a suggested workflow for collaborating with LLMs to solve coding challenges, the [guide video](./guide.mp4) walks you through an example using this workflow with an example\*. This workflow is just a suggestion - with practice you will find what works best for you:

0. Clearly describe the _behavior_ you want your function to have. Include a couple input/output examples.
   - Write your description as a _docstring_
1. Ask the AI to generate a suite of black box unit tests for this docstring, covering as many boundary cases as possible.
   - You may need to reformat the tests to have one assertion per test.
   - Read the tests to be sure you understand them and they are correct, make changes or add test cases as necessary.
   - You can also ask the AI to generate tests for defensive assertions.
2. Ask the AI to generate a function that will pass your unit tests. Provide your updated unit tests in your prompt as context.
   - Test the function to make sure it passes. AI isn't always right!
   - Debug any failing test cases. You can do this manually, and with help from the LLM.
   - If you still can't debug the function, explain to the AI which test cases failed then ask it to generate a new solution (you'll spend time understanding the solution in the next step).
   - Repeat until all the tests pass.
3. Study the passing code to understand it's _strategy_. Code is not maintainable if you don't understand it.
   - You may need to change the function's _implementation_ to understand it, try: renaming variables, adding comments, ... whatever helps!
   - Write more tests to explore the function's implementation and edge cases.
   - If you have trouble understanding the code, you can try asking the AI to help explain it.
   - If you still can't understand the solution, return to step 2 and ask the AI to solve the same challenge using a different strategy.
   - Don't forget to run your tests after every change you make!
4. Polish the function's _implementation_ so it is as clear and helpful as possible.
   - Use a linter and a formatter.
   - Add comments and change variable names when necessary to explain the _strategy_
   - See if you can't simplify the control flow. For example, are there too many nested structures?
   - Consider adding defensive argument validation.
   - Don't forget to run your tests after every change you make!
5. Use a code review checklist to double-check your finished code.

> \* The video uses Python, but you don't need to perfectly understand the code to understand the stages of development.
