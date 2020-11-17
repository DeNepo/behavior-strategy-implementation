'use strict';


/* describe

  describe is used to group test cases

  describe is an IMPLICIT GLOBAL DEPENDENCY
    it is used in test files without being declared
  to run test files you need a specialized test environment
    you can run these files in the browser using `study-lenses`
    or from node using `$ mocha path/to/file.js`
  if

*/

describe('this is what describe does', () => {
  describe('when there is no error', () => {
    // if there are no errors, nothing special happens
    const hello = 'from in a describe';
    console.log(hello);
  });
  describe('when an error occurs', () => {
    throw new Error('something went wrong!');
  });
});





