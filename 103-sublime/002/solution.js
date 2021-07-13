/**
 * Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 * Solution Ref: https://www.udemy.com/share/103J2KAEsSeFtRQX4=/
 */

{
  /**
   * Approach: Brute Force
   * Time complexity: O(n^2)
   * Space complexity: O(1)
   */

  function maxArea(height) {
    let max = 0;
    for (let p1 = 0; p1 < height.length; p1 += 1) {
      for (let p2 = p1 + 1; p2 < height.length; p2 += 1) {
        const h = Math.min(height[p1], height[p2]);
        const w = p2 - p1;
        const a = h * w;
        max = Math.max(max, a);
      }
    }
    return max;
  }

  console.log(
    "maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]):",
    maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]),
  ); // 49
  console.log("maxArea([1, 1]):", maxArea([1, 1])); // 1
  console.log("maxArea([4, 3, 2, 1, 4]):", maxArea([4, 3, 2, 1, 4])); // 16
  console.log("maxArea([1, 2, 1]):", maxArea([1, 2, 1])); // 2
  console.log("maxArea([1, 8, 6, 2, 9, 4]):", maxArea([1, 8, 6, 2, 9, 4])); // 24
  console.log("maxArea([1, 7, 2, 0, 1, 3]):", maxArea([1, 7, 2, 0, 1, 3])); // 12
  console.log("maxArea([6, 9, 3, 4, 5, 8]):", maxArea([6, 9, 3, 4, 5, 8])); // 32
  console.log("maxArea([7, 1, 2, 3, 9]):", maxArea([7, 1, 2, 3, 9])); // 28
  console.log("maxArea([]):", maxArea([])); // 0
  console.log("maxArea([7]):", maxArea([7])); // 0
}

console.log("\n================================\n");

{
  /**
   * Approach: Optimal
   * More Details: Two Shifting Pointers
   * Time complexity: O(n)
   * Space complexity: O(1)
   */

  function maxArea(height) {
    let max = 0,
      p1 = 0,
      p2 = height.length - 1;
    while (p1 < p2) {
      const h = Math.min(height[p1], height[p2]);
      const w = p2 - p1;
      const a = h * w;
      max = Math.max(max, a);
      if (height[p1] <= height[p2]) {
        p1 += 1;
      } else {
        p2 -= 1;
      }
    }
    return max;
  }

  console.log(
    "maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]):",
    maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]),
  ); // 49
  console.log("maxArea([1, 1]):", maxArea([1, 1])); // 1
  console.log("maxArea([4, 3, 2, 1, 4]):", maxArea([4, 3, 2, 1, 4])); // 16
  console.log("maxArea([1, 2, 1]):", maxArea([1, 2, 1])); // 2
  console.log("maxArea([1, 8, 6, 2, 9, 4]):", maxArea([1, 8, 6, 2, 9, 4])); // 24
  console.log("maxArea([1, 7, 2, 0, 1, 3]):", maxArea([1, 7, 2, 0, 1, 3])); // 12
  console.log("maxArea([6, 9, 3, 4, 5, 8]):", maxArea([6, 9, 3, 4, 5, 8])); // 32
  console.log("maxArea([7, 1, 2, 3, 9]):", maxArea([7, 1, 2, 3, 9])); // 28
  console.log("maxArea([]):", maxArea([])); // 0
  console.log("maxArea([7]):", maxArea([7])); // 0
}
