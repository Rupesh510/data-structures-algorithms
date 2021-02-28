/**
 * Approach: Optimal
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

function trap(height) {
  let left = 0,
    right = height.length - 1,
    totalWater = 0,
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
