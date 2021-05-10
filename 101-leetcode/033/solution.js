/**
 * Min Cost Climbing Stairs
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 */

{
  /**
   * Approach: Top down recursive memoized
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */

  function minCostClimbingStairs(cost) {
    const n = cost.length;
    const dp = [];
    return Math.min(minCost(n - 1, cost, dp), minCost(n - 2, cost, dp));
  }

  function minCost(i, cost, dp) {
    if (i < 0) return 0;
    if (i === 0 || i === 1) return cost[i];
    if (dp[i] !== undefined) return dp[i];

    dp[i] =
      cost[i] + Math.min(minCost(i - 1, cost, dp), minCost(i - 2, cost, dp));

    return dp[i];
  }

  console.log(minCostClimbingStairs([10, 15, 20])); // 15

  console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
}
