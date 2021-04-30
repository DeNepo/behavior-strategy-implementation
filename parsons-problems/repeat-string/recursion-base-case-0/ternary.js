/* 2 extra lines */

// prettier-ignore
const repeatString = (text = '', repetitions = 1) =>
  repetitions === 0
    ? ''
    : text + repeatString(text, nextRepetitions - 1);


const repeatString = (text = '', repetitions = 1) => { // distractor
repetitions = 0 // distractor
