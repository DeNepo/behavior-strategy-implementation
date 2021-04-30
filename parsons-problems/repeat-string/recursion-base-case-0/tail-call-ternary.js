/* 2 extra lines */

// prettier-ignore
const repeatString = (text = '', repetitions = 1, repeated = '') =>
  repetitions === 0
    ? repeated
    : repeatString(text, repetitions - 1, repeated + text);

? '' // distractor
: repeatString(text, repetitions - 1); // distractor
