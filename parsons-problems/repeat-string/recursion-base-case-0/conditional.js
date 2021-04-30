/* 2 extra lines */

const repeatString = (text = '', repetitions = 1) => {
  if (repetitions === 0) {
    return '';
  } else {
    const nextRepetitions = repetitions - 1;
    const oneRepetitionShort = repeatString(text, nextRepetitions);
    return text + oneRepetitionShort;
  }
};

return oneRepetitionShort + text; // distractor
if (repetitions !== 0) { // distractor

