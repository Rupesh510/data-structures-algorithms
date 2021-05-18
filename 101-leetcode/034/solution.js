/**
 * Knight Probability in Chessboard
 * https://leetcode.com/problems/knight-probability-in-chessboard/
 * Solution Ref: https://www.udemy.com/share/103J2KAEsSeFtRQX4=/
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

console.log("\n================================\n");

{
  /**
   * Approach: Step 3, Bottom up iterative memoized
   * Time Complexity: O(n^2 x k)
   * Space Complexity: O(n^2 x k)
   */

  function knightProbability(n, k, row, column) {
    const dp = new Array(k + 1).fill(0).map(() => {
      return new Array(n).fill(0).map(() => {
        return new Array(n).fill(0);
      });
    });

    dp[0][row][column] = 1;

    for (let step = 1; step <= k; step += 1) {
      for (let row = 0; row < n; row += 1) {
        for (let col = 0; col < n; col += 1) {
          for (let i = 0; i < DIRECTIONS.length; i += 1) {
            const dir = DIRECTIONS[i];
            const prevRow = row + dir[0];
            const prevCol = col + dir[1];

            if (prevRow >= 0 && prevRow < n && prevCol >= 0 && prevCol < n) {
              dp[step][row][col] += dp[step - 1][prevRow][prevCol] / 8;
            }
          }
        }
      }
    }

    let res = 0;

    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        res += dp[k][i][j];
      }
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
   * Approach: Step 4, Bottom up iterative memoized optimized
   * Time Complexity: O(n^2 x k)
   * Space Complexity: O(n^2)
   */

  function knightProbability(n, k, row, column) {
    let prevDp = new Array(n).fill(0).map(() => {
      return new Array(n).fill(0);
    });

    let nextDp = new Array(n).fill(0).map(() => {
      return new Array(n).fill(0);
    });

    prevDp[row][column] = 1;

    for (let step = 1; step <= k; step += 1) {
      for (let row = 0; row < n; row += 1) {
        for (let col = 0; col < n; col += 1) {
          for (let i = 0; i < DIRECTIONS.length; i += 1) {
            const currentDirection = DIRECTIONS[i];
            const prevRow = row + currentDirection[0];
            const prevCol = col + currentDirection[1];

            if (prevRow >= 0 && prevRow < n && prevCol >= 0 && prevCol < n) {
              nextDp[row][col] += prevDp[prevRow][prevCol] / 8;
            }
          }
        }
      }

      prevDp = nextDp;

      nextDp = new Array(n).fill(0).map(() => {
        return new Array(n).fill(0);
      });
    }

    let res = 0;

    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        res += prevDp[i][j];
      }
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
