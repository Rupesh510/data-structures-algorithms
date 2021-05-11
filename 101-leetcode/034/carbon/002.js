/**
 * Approach: Step 2, Top down recursive memoized
 * Time Complexity: O(n^2 x k)
 * Space Complexity: O(n^2 x k)
 */

const DIRECTIONS = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
];

function knightProbability(n, k, row, column) {
  const dp = new Array(k + 1).fill(0).map(() => {
    return new Array(n).fill(0).map(() => {
      return new Array(n).fill(undefined);
    });
  });

  return recurse(n, k, row, column, dp);
}

function recurse(n, k, row, column, dp) {
  if (row < 0 || column < 0 || row >= n || column >= n) {
    return 0;
  }

  if (k === 0) {
    return 1;
  }

  if (dp[k][row][column] !== undefined) {
    return dp[k][row][column];
  }

  let res = 0;
  for (let dir of DIRECTIONS) {
    res += recurse(n, k - 1, row + dir[0], column + dir[1], dp) / 8;
  }

  dp[k][row][column] = res;
  return dp[k][row][column];
}
