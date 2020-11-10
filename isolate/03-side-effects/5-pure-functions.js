'use strict';

/* pure functions:
  only uses variables that are:
  - parameters or
  - locally declared
  do not modify data passed as arguments (no side effects)

  can you identify which of these are pure functions?
  questions to ask yourself:
  1. where was each variable declared?
  2. are array arguments copied?
  3. is the copy or the original modified?
*/

const reverseArray1 = (arr) => {
  return arr.reverse();
};

const reverseArray2 = (arr) => {
  return [...arr].reverse();
};

const replaceEntry = (array, newValue) => {
  const copy = [...array];
  copy[index] = newValue;
  return copy;
};

const removeEntry = (arr, index) => {
  const copy = [...arr];
  arr.splice(index, 1);
  return copy;
};

const addEntry = (arr, index) => {
  const copy = [...arr];
  copy.splice(index, 1, newEntry);
  return copy;
};

// helpful links
//  https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
//  https://futurestud.io/tutorials/clone-copy-an-array-in-javascript-and-node-js
