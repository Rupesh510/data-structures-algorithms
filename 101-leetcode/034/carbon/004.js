/**
 * Approach: Step 4, Bottom up iterative memoized optimized
 * Time Complexity: O(n^2 x k)
 * Space Complexity: O(n^2)
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
