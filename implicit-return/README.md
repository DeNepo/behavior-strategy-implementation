# Implicit Return

When the body of an arrow function is a single _expression_, you can remove the curly braces `{ }` and the `return` statement to make your function a single line.

Writing a function one way or the other is just preference. A good general rule is to start with an explicit `return` and refactor to an implicit arrow function if you prefer that.

```js
// these two functions do exactly the same thing!

const explicitReturn = (a, b) => {
  return a + b;
};

const implicitReturn = (a, b) => a + b;
```

The exercises in this folder will give you a function that uses `return`, you have 2 things to do:

1. Decide if the function _can_ be written with an implicit return
2. Rewrite it with an implicit return if it's possible

---

## References

- [Colt Steele](https://www.youtube.com/watch?v=thXp0_py9X4)
- [Tyler McGinnis](https://ui.dev/arrow-functions/)
- [Jake Trent](https://jaketrent.com/post/javascript-arrow-function-return-rules)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
