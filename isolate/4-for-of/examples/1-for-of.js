'use strict';

const trees = ['birch', 'larch', 'oak'];

// this is iterating through the items in an array with a normal for loop:
console.log('normal for loop');

for (let i = 0; i < trees.length; i++) {
  const tree = trees[i];
  console.log('- ' + tree);
}


// for ... of lets you do the same thing with simpler syntax
//  this makes code easier to read
//  and helps to avoid small mistakes
console.log('for ... of loop');

for (const tree of trees) {
  console.log('- ' + tree);
}


// there are some things you can't do with a for ... of loop
//  but these things are less common
console.log('print elements in reverse order');

for (let i = trees.length - 1; i >= 0; i--) {
  const tree = trees[i];
  console.log('- ' + tree);
}


// bonus! no infinite loops when you use for ... of
//  because arrays can't store an infinite number of things :)
