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
