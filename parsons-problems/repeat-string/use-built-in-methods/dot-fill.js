/* 3 extra lines */

const repeatString = (text = '', repetitions = 1) => {
  const oneEntryPerRepetition = Array(repetitions).fill(text);
  const repeatedString = oneEntryPerRepetition.join('');
  return repeatedString;
};

return Array(repetitions).fill(text); // distractor
const repeatedString = Array(repetitions).fill(text); // distractor
const oneEntryPerRepetition = repeatedString.join(''); // distractor
