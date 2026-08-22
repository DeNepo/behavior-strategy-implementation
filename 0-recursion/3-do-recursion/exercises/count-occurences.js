'use strict';

/**
 *
 *
 */
const countOccurrences = (str = '', char = '') => {
  if (str === '') {
    return 0;
  } else {
    return (str[0] === char ? 1 : 0) + countOccurrences(str.slice(1), char);
  }
};

// -------- manual recursion --------

countOccurrences('asdf', 'a'); // breaking down

countOccurrences('asdf', 'x'); // breaking down

countOccurrences('ABCDEF', 'a'); // breaking down

countOccurrences('BANANA', 'A'); // breaking down

