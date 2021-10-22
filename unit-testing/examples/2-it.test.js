// #todo

'use strict';

/* it

  it is used to wrap each test case
  if there was an error:
    it will fail
  if there was no error:
    it will pass


  it is an IMPLICIT GLOBAL DEPENDENCY
    it is used in test files without being declared
  to run test files you need a specialized test environment
    you can run these files in the browser using `study-lenses`
    or with the VSCode debugger using the "Current JS File (with tests)" option
    or from node using `$ jest path/to/file.js`

*/

// the main test suite
describe('an entire test suite', () => {
  // one test
  it('a single passing test', () => {
    const hello = 'hello';
    // nothing wrong here!
  });
  // another test
  it('a single failing test', () => {
    const notAFunction = 'hello !';
    notAFunction();
  });
});
