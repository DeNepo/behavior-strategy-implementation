/* 4 extra lines */

const repeatString = (text = '', repetitions = 1) => {
  const finalLength = text.length * repetitions;
  let repeatedText = '';
  while (true) {
    if (repeatedText.length === finalLength) {
      break;
    }
    repeatedText = repeatedText + text;
  }
  return repeatedText;
};

continue; // distractor
if (repeatedText.length = finalLength) { // distractor
while (false) { // distractor
} // distractor
