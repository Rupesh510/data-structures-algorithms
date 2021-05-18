/**
 * House Robber
 * https://leetcode.com/problems/house-robber/
 */

{
  function rob(n) {}

  console.log(`rob([1, 2, 3, 1]):`, rob([1, 2, 3, 1])); // 4
  /**
   * Answer: 4
   * Explanation: Rob house 1 (money = 1) and
   * then, rob house 3 (money = 3).
   * Total amount you can rob = 1 + 3 = 4.
   */

  console.log(`rob([2, 7, 9, 3, 1]):`, rob([2, 7, 9, 3, 1])); // 12
  /**
   * Answer: 12
   * Explanation: Rob house 1 (money = 2),
   * then, rob house 3 (money = 9)
   * and then, rob house 5 (money = 1).
   * Total amount you can rob = 2 + 9 + 1 = 12.
   */
}
