/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c61d06679fb30001ffe32f */

/* this exercise has 3 distractors */

function removeExclamationMarks(s) {
  var newString = '';
  // I tried to throw error if there is not ! in the string but it didn't really work
  //if (!newString.includes('!')) throw new Error();
  for (let i = 0; i < s.length; i++) {
    if (s[i] != '!') {
      newString += s[i];
    }
  }
  return newString;
}

for (const solution of [removeExclamationMarks]) 
{
  describe('It should work for one word', () => {
    it('deletes ! in one word', () => {
      expect(removeExclamationMarks('Hi!')).toEqual('Hi')     
    });
  });

  describe('It should work for two words', () => {
    it('deletes ! in two seperate words', () => {
      expect(removeExclamationMarks('Hi! Hello!')).toEqual('Hi Hello')
    });
  });

  describe('It should work with multiple !', () => {
    it('Delete all !s', () => {
      expect(removeExclamationMarks('There are so many !!!')).toEqual('There are so many ')
    });
  });

}

// This is to test the error message

// describe('It should not work without !', () => {
//   it('throw error message', () => {
//     expect(removeExclamationMarks('nothing to do')).toEqual(Error)
//   });
// });

}
