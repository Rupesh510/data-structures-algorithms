/**
 * Two Sum
 * https://leetcode.com/problems/two-sum/
 *
 */

{
  /**
   * Approach: One-pass Hash Table
   * Time complexity: O(n)
   * Space complexity: O(n)
   *
   * Runtime: 72 ms, faster than 94.30% of
   * JavaScript online submissions for Two Sum.
   *
   * Memory Usage: 38.6 MB, less than 85.68% of
   * JavaScript online submissions for Two Sum.
   */

  function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i += 1) {
      const key = target - nums[i];
      if (map.has(key)) {
        return [map.get(key), i];
      }
      map.set(nums[i], i);
    }
  }

  console.log("twoSum([2, 7, 11, 15], 9):", twoSum([2, 7, 11, 15], 9)); // [0, 1]
  console.log("twoSum([3, 2, 4], 6):", twoSum([3, 2, 4], 6)); // [1, 2]
  console.log("twoSum([3, 3], 6):", twoSum([3, 3], 6)); // [0, 1]
  console.log("twoSum([1, 3, 7, 9, 2], 11):", twoSum([1, 3, 7, 9, 2], 11)); // [3, 4]
}
