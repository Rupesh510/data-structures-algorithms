/**
 * Number of Islands
 * https://leetcode.com/problems/validate-binary-search-tree/
 */

const directions = require("./directions");

{
  function numIslands(grid) {}

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
