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
