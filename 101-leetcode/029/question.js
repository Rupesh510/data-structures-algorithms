/**
 * Rotting Oranges
 * https://leetcode.com/problems/rotting-oranges/
 */

const directions = require("./directions");
const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

{
  function orangesRotting(grid) {}

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

  console.log(orangesRotting([[0, 2]])); // 0
}
