# Describing Recursion

you can label the parts of recursion without understanding the algorithm

## Terminology

every solution may not have every piece!

- base case
- turn-around
- recursive case
- break-down
- recursion
- build-up

## Recursive _Definitions_ vs. Recursive _Solutions_

- formal recursive definition is the _strategy_
- recursive functions are the _implementation_

## notation

... some light, formal-ish notation

## Template Function for Basic Recursion

Each example in this _Describing Recursion_ will start with this recursion template which can help you recognize the consistent form of a basic recursive solution. If you find this template helpful, you're welcome to use it ...

```js
/**
 * ___.
 * 
 * base case: 
 *    __   ->  __ 
 * recursive case: 
 *    __   ->  __ 
 */
const _fname_ = (_ = _ /* or more args */) => {
  const isBaseCase = __; // must use argument(s)
  if (isBaseCase) {
    const turnAround = __;
    return turnAround;
  } else {
    // reursive case
    const breakDown = __; // must use argument(s)
    const recursion = _fname_(breakDown);
    const buildUp = __; // must use recursion
    return buildUp;
  }
};
```

## Labeling Recursive Solution

```js
// demo how to use comments to label the components in a non-template solution
```
