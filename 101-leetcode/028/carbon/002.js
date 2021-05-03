/**
 * Approach: Depth First Search
 * Time Complexity: O(m x n) => O(n)
 * Space Complexity: O(m x n) => O(n)
 */

const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

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
