'use strict';

/**
 * empty array       ->   0
 * non-empty arr   ->   first num + ƒ(array without first num)
 */
const sumNumbers = (nums = []) => {
  //  |---- basecase ----|
  if (nums.length === 0) {
    return 0; // turn-around
  }
  //        |  build-up  |   recursion   |  break-down |
  return nums[0] + sumNumbers(nums.slice(1));
};

// -------- manual recursion --------

sumNumbers([3, 2, 1]); // breaking down
3 + sumNumbers([2, 1]);
3 + (2 + sumNumbers([1]));
3 + (2 + (1 + sumNumbers([]))); // base case
3 + (2 + (1 + 0)); // turn around
3 + (2 + 1); // building up
3 + 3;
6;

sumNumbers([-1, 0, 1, 0, -1, 0, 1]); // breaking down
-1 + sumNumbers([0, 1, 0, -1, 0, 1]);
-1 + (0 + sumNumbers([1, 0, -1, 0, 1]));
-1 + (0 + (1 + sumNumbers([0, -1, 0, 1])));
-1 + (0 + (1 + (0 + sumNumbers([-1, 0, 1]))));
-1 + (0 + (1 + (0 + (-1 + sumNumbers([0, 1])))));
-1 + (0 + (1 + (0 + (-1 + (0 + sumNumbers([1]))))));
-1 + (0 + (1 + (0 + (-1 + (0 + (1 + sumNumbers([]))))))); // base case
-1 + (0 + (1 + (0 + (-1 + (0 + (1 + 0)))))); // turn around
-1 + (0 + (1 + (0 + (-1 + (0 + 1))))); // building up
-1 + (0 + (1 + (0 + (-1 + 1))));
-1 + (0 + (1 + (0 + 0)));
-1 + (0 + (1 + 0));
-1 + (0 + 1);
-1 + 1;
0;

sumNumbers([]); // base case
0; // turn around
