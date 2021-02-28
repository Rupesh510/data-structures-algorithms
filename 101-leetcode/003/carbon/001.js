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
