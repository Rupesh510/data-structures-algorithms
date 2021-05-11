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
