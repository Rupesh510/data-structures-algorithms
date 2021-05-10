/**
 * Approach: Top down recursive
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 */

function minCostClimbingStairs(cost) {
  const n = cost.length;
  return Math.min(minCost(n - 1, cost), minCost(n - 2, cost));
}

function minCost(i, cost) {
  if (i < 0) return 0;
  if (i === 0 || i === 1) return cost[i];

  return cost[i] + Math.min(minCost(i - 1, cost), minCost(i - 2, cost));
}
