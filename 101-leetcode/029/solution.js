/**
 * Rotting Oranges
 * https://leetcode.com/problems/rotting-oranges/
 */

const directions = require("./directions");
const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

{
  function orangesRotting(grid) {
    if (grid.length === 0) return 0;

    const queue = [];
    let freshOranges = 0;

    for (let row = 0; row < grid.length; row += 1) {
      for (let col = 0; col < grid[0].length; col += 1) {
        if (grid[row][col] === ROTTEN) {
          queue.push([row, col]);
        }

        if (grid[row][col] === FRESH) {
          freshOranges += 1;
        }
      }
    }

    let minutes = 0;
    let currentQueueSize = queue.length;

    while (queue.length > 0) {
      if (currentQueueSize === 0) {
        currentQueueSize = queue.length;
        minutes += 1;
      }

      const currentOrange = queue.shift();
      currentQueueSize -= 1;
      const row = currentOrange[0];
      const col = currentOrange[1];

      for (let i = 0; i < directions.length; i += 1) {
        const currentDir = directions[i];
        const nextRow = row + currentDir[0];
        const nextCol = col + currentDir[1];

        if (
          nextRow < 0 ||
          nextRow >= grid.length ||
          nextCol < 0 ||
          nextCol >= grid[0].length
        ) {
          continue;
        }

        if (grid[nextRow][nextCol] === FRESH) {
          grid[nextRow][nextCol] = 2;
          freshOranges -= 1;
          queue.push([nextRow, nextCol]);
        }
      }
    }

    if (freshOranges !== 0) {
      return -1;
    }

    return minutes;
  }

  console.log(
    orangesRotting([
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ]),
  ); // 4

  console.log(
    orangesRotting([
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1],
    ]),
  ); // -1
  // The orange in the bottom left corner (row 2, column 0) is
  // never rotten, because rotting only happens 4 - directionally.

  console.log(orangesRotting([[0, 2]])); // 0
  // Since there are already no fresh oranges at minute 0,
  // the answer is just 0.
}
