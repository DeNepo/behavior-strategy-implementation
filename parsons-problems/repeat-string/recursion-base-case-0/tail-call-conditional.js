/* 2 extra lines */

const repeatString = (text = '', repetitions = 1, repeated = '') => {
  if (repetitions === 0) {
    return repeated;
  } else {
    const nextRepeated = repeated + text;
    const nextRepetitions = repetitions - 1;
    return repeatString(text, nextRepetitions, nextRepeated);
  }
};

return ''; // distractor
return repeatString(text, nextRepetitions); // distractor
