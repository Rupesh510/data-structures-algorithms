/**
 * Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/
 */

{
  function trap(height) {}

  console.log(
    "trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]):",
    trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]),
  ); // 6
  console.log("trap([4, 2, 0, 3, 2, 5]):", trap([4, 2, 0, 3, 2, 5])); // 9
  console.log(
    "trap([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]):",
    trap([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]),
  ); // 8
  console.log("trap([]):", trap([])); // 0
  console.log("trap([3]):", trap([3])); // 0
  console.log("trap([3, 4, 3]):", trap([3, 4, 3])); // 0
}
