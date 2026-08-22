'use strict';

/**
 * empty string/array  ->   0
 * non-empty str/arr   ->   1 + ƒ(str/arr without first value)
 */
const length = (strOrArr = '') => {
  //  |----- basecase -----|
  if (strOrArr.length === 0) {
    return 0; // turn-around
  } else {
    //         | bu |  rec   |  break-down   |
    return 1 + length(strOrArr.slice(1));
  }
};

// -------- manual recursion --------

length(''); // base case
0; // turn-around

length('azerty'); // breaking down
1 + length('zerty');
1 + (1 + length('erty'));
1 + (1 + (1 + length('rty')));
1 + (1 + (1 + (1 + length('ty'))));
1 + (1 + (1 + (1 + (1 + length('y')))));
1 + (1 + (1 + (1 + (1 + (1 + length('')))))); // base case
1 + (1 + (1 + (1 + (1 + (1 + 0))))); // turn-around
1 + (1 + (1 + (1 + (1 + 1)))); // building up
1 + (1 + (1 + (1 + 2)));
1 + (1 + (1 + 3));
1 + (1 + 4);
1 + 5;
6;

length([]); // base case
0; // turn-around

length([true, false, false, true]); // breaking down
1 + length([false, false, true]);
1 + (1 + length([false, true]));
1 + (1 + (1 + length([true])));
1 + (1 + (1 + (1 + length([])))); // base case
1 + (1 + (1 + (1 + 0))); // turn-around
1 + (1 + (1 + 1)); // building up
1 + (1 + 2);
1 + 3;
4;
