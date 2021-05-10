/**
 * Approach: Step 4, Bottom up iterative memoized optimized
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function minCostClimbingStairs(cost) {
  const n = cost.length;

  if (n === 0) return 0;
  if (n === 1) return cost[0];

  let dpOne = cost[0];
  let dpTwo = cost[1];

  for (let i = 2; i < n; i += 1) {
    const current = cost[i] + Math.min(dpOne, dpTwo);
    dpOne = dpTwo;
    dpTwo = current;
  }

  return Math.min(dpOne, dpTwo);
}
