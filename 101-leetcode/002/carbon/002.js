/**
 * Approach: Optimal
 * More Details: Two Shifting Pointers
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

function maxArea(height) {
  let p1 = 0,
    p2 = height.length - 1,
    max = 0;
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
