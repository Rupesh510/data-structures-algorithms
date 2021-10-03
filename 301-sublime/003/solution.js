/**
 * Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/
 * Solution Ref: https://www.udemy.com/share/103J2KAEsSeFtRQX4=/
 */

{
  /**
   * Approach: Brute Force
   * Time complexity: O(n^2)
   * Space complexity: O(1)
   */

  function trap(height) {
    let totalWater = 0;
    for (let p = 0; p < height.length; p += 1) {
      let leftP = p,
        rightP = p,
        maxLeft = 0,
        maxRight = 0;

      while (leftP >= 0) {
        maxLeft = Math.max(maxLeft, height[leftP]);
        leftP -= 1;
      }

      while (rightP < height.length) {
        maxRight = Math.max(maxRight, height[rightP]);
        rightP += 1;
      }

      const currentWater = Math.min(maxLeft, maxRight) - height[p];

      if (currentWater >= 0) {
        totalWater += currentWater;
      }
    }

    return totalWater;
  }

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

console.log("\n================================\n");

{
  /**
   * Approach: Optimal
   * Time complexity: O(n)
   * Space complexity: O(1)
   */

  function trap(height) {
    let totalWater = 0,
      left = 0,
      right = height.length - 1,
      maxLeft = 0,
      maxRight = 0;

    while (left < right) {
      if (height[left] <= height[right]) {
        if (height[left] >= maxLeft) {
          maxLeft = height[left];
        } else {
          totalWater += maxLeft - height[left];
        }
        left += 1;
      } else {
        if (height[right] >= maxRight) {
          maxRight = height[right];
        } else {
          totalWater += maxRight - height[right];
        }
        right -= 1;
      }
    }

    return totalWater;
  }

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
