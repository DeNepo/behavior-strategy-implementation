/* 3 extra lines */

/* parsons-collapse: iterating over the number of repetitions

  repeatString(text, repetitions) =>
    1. create a new string to fill with many text's
    2. create and initialize a stepper variable
    3. iterate repetitions number of times
      a. check if stepper is still less than repetitions
        keep going if it is, otherwise stop iterating
      b. append text to the new string
      c. increment the stepper
      d. repeat
    return: the new repeated string

*/

const repeatString = (text = '', repetitions = 1) => {
  let repeatedText = '';
  for (let count = repetitions; count > 0; count--) {
    repeatedText += text;
  }
  return repeatedText;
};

for (let count = repetitions; count > 0; count++ { // distractor
for (let count = repetitions; count === 0; count--) { // distractor
for (let count = repetitions; count >= 0; count-) { // distractor


