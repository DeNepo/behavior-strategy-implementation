// #todo

'use strict';

/* `describe`

  `describe` is used to group test cases
    a group of test cases is called a "suite"
    testing suites are used to group logically related tests

  `describe` is an IMPLICIT GLOBAL DEPENDENCY
    it is used in test files without being declared
  to run test files you need a specialized test environment
    you can run these files in the browser using `study-lenses`
    or with the VSCode debugger using the "Current JS File (with tests)" option
    or from node using `$ jest path/to/file.js`

*/

// the main test suite
describe('this is what describe does', () => {
  // a nested test suite
  describe('when there is no error', () => {
    // if there are no errors, nothing special happens
    const hello = 'from in a describe';
    // not all testing environments will print console.logs
    //  you can use a sandbox.js file for unstructured experiments
    //  tests will just test!
    console.log(hello);
  });
  // another nested test suite
  describe('when an error occurs', () => {
    throw new Error('something went wrong!');
  });
});
