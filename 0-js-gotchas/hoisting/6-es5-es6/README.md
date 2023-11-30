# ES5 vs. ES6

many of the most important differences between es5 and es6 style programs are
not visible in the source code, they can only be appreciated in when you
understand the debugger and runtime dynamics of your program. Just By looking
only at the source code it's easy to think that they're just different ways of
writing the same code. But take a peak into the debugger and you'll see that the
changes are far more than that. For now you can think of them as falling into
three categories of improvement:

- good practices with variables: `let` and `const` do not let you use variables
  before they are declared. and `const` gives JS and fellow the developers
  confidence that a value will always be the same
- better control over _scope_: `let` and `const` are placed in the Script scope
  instead of a property on the Window object. block scope is enforced. these
  changes make it easier for JS to optimize your code, easier for developers to
  reason about, and easier to understand in the debugger
- only using function expressions: with arrow functions, you can only use them
  _after_ they have been defined and assigned to a variable. this helps with
  reading and understanding the logic of a program. as a bonus, when you use
  `const` to assign a function to a variable, you know it will always be a
  function
- `() => {}` helps to avoid some tricky mistakes that `function` does not

## Suggestions

- Variable Declarations
  1. Never use `var`
  1. Use `const` whenever possible
  1. Use `let` when you need to
- Functions
  1. Use expressions with `const`: `const somethingCool = () => {}`
- Variable Scoping
  1. Declare variables in the smallest scope possible

## Organizing Files

You will find that using `const func = () => {}` forces you to write your code
in a certain order, writing functions above where you use them. At first you may
prefer to use `function name() {}` so that your functions are hoisted and you
can use them anywhere you want - don't get used to this! Defining your functions
before you use them will help you to write your code with a more consistent
style from one group-member to the next.

Soon you'll be learning `import` and `export`, then you'll _have to_ import
functions before you use them! Better to build this habit now so the transition
to using modules will be easier.

---

## References

- [all the ways](https://stackoverflow.com/questions/4862193/difference-between-variable-declaration-syntaxes-in-javascript-including-global)
