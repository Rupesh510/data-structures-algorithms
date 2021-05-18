/**
 * Min Cost Climbing Stairs
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 * Solution Ref: https://www.udemy.com/share/103J2KAEsSeFtRQX4=/
 */

{
  /**
   * Approach: Step 1, Top down recursive
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

  console.log(minCostClimbingStairs([10, 15, 20])); // 15

  console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
}

console.log("\n================================\n");

{
  /**
   * Approach: Step 2, Top down recursive memoized
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

console.log("\n================================\n");

{
  /**
   * Approach: Step 3, Bottom up iterative memoized
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */

  function minCostClimbingStairs(cost) {
    const n = cost.length;

    if (n === 0) return 0;
    if (n === 1) return cost[0];

    const dp = [];

    for (let i = 0; i < n; i += 1) {
      if (i < 2) {
        dp[i] = cost[i];
      } else {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
      }
    }

    return Math.min(dp[n - 1], dp[n - 2]);
  }

  console.log(minCostClimbingStairs([10, 15, 20])); // 15

  console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
}

console.log("\n================================\n");

{
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

  console.log(minCostClimbingStairs([10, 15, 20])); // 15

  console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
}
