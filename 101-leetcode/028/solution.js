/**
 * Number of Islands
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Solution Ref: https://www.udemy.com/share/103J2KAEsSeFtRQX4=/
 */

const directions = require("./directions");

{
  /**
   * Approach: Breadth First Search
   * Time Complexity: O(m x n) => O(n)
   * Space Complexity: O(Math.max(m, n)) => O(n)
   */

  function numIslands(grid) {
    if (grid.length === 0) return 0;
    let islandCount = 0;

    for (let row = 0; row < grid.length; row += 1) {
      for (let col = 0; col < grid[0].length; col += 1) {
        if (grid[row][col] === "1") {
          islandCount += 1;
          grid[row][col] = "0";

          const queue = [];
          queue.push([row, col]);

          while (queue.length) {
            const currentPos = queue.shift();
            const currentRow = currentPos[0];
            const currentCol = currentPos[1];

            for (let i = 0; i < directions.length; i += 1) {
              const currentDir = directions[i];
              const nextRow = currentRow + currentDir[0];
              const nextCol = currentCol + currentDir[1];

              if (
                nextRow < 0 ||
                nextRow >= grid.length ||
                nextCol < 0 ||
                nextCol >= grid[0].length
              ) {
                continue;
              }

              if (grid[nextRow][nextCol] === "1") {
                queue.push([nextRow, nextCol]);
                grid[nextRow][nextCol] = "0";
              }
            }
          }
        }
      }
    }

    return islandCount;
  }

  console.log(
    numIslands([
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ]),
  ); // 1

  console.log(
    numIslands([
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ]),
  ); // 3
}

{
  /**
   * Approach: Depth First Search
   * Time Complexity: O(m x n) => O(n)
   * Space Complexity: O(m x n) => O(n)
   */

  function numIslands(grid) {
    if (!grid.length) return 0;
    let islandCount = 0;

    for (let row = 0; row < grid.length; row += 1) {
      for (let col = 0; col < grid[0].length; col += 1) {
        if (grid[row][col] === "1") {
          islandCount += 1;
          depthFirstSearch(grid, row, col);
        }
      }
    }

    return islandCount;
  }

  function depthFirstSearch(grid, currentRow, currentCol) {
    if (
      currentRow < 0 ||
      currentRow >= grid.length ||
      currentCol < 0 ||
      currentCol >= grid[0].length
    ) {
      return;
    }

    if (grid[currentRow][currentCol] === "1") {
      grid[currentRow][currentCol] = "0";

      for (let i = 0; i < directions.length; i += 1) {
        const currentDir = directions[i];
        const row = currentDir[0];
        const col = currentDir[1];
        depthFirstSearch(grid, currentRow + row, currentCol + col);
      }
    }
  }

  console.log(
    numIslands([
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ]),
  ); // 1

  console.log(
    numIslands([
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ]),
  ); // 3
}
