/**
 * Knight Probability in Chessboard
 * https://leetcode.com/problems/knight-probability-in-chessboard/
 */

const DIRECTIONS = require("./directions");

{
  /**
   * Approach: Step 1, Top down recursive
   * Time Complexity: O(8^k)
   * Space Complexity: O(8^k)
   */

  function knightProbability(n, k, row, column) {
    if (row < 0 || column < 0 || row >= n || column >= n) {
      return 0;
    }

    if (k === 0) {
      return 1;
    }

    let res = 0;

    for (let dir of DIRECTIONS) {
      res += knightProbability(n, k - 1, row + dir[0], column + dir[1]) / 8;
    }

    return res;
  }

  console.log(
    `knightProbability(3, 2, 0, 0):`,
    parseFloat(knightProbability(3, 2, 0, 0)).toFixed(5),
  ); // 0.06250

  console.log(
    `knightProbability(1, 0, 0, 0):`,
    parseFloat(knightProbability(1, 0, 0, 0)).toFixed(5),
  ); // 1.00000
}

console.log("\n================================\n");

{
  /**
   * Approach: Step 2, Top down recursive memoized
   * Time Complexity: O(n^2 x k)
   * Space Complexity: O(n^2 x k)
   */

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

  console.log(
    `knightProbability(3, 2, 0, 0):`,
    parseFloat(knightProbability(3, 2, 0, 0)).toFixed(5),
  ); // 0.06250

  console.log(
    `knightProbability(1, 0, 0, 0):`,
    parseFloat(knightProbability(1, 0, 0, 0)).toFixed(5),
  ); // 1.00000
}
