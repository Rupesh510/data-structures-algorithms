/**
 * Contains Duplicate II
 * https://leetcode.com/problems/contains-duplicate-ii/
 * Solution Ref: https://youtu.be/Fmmzy5Jg-Mw
 */

{
  /**
   * Approach: Optimal
   * Time complexity: O(n)
   */

  function containsNearbyDuplicate(nums, k) {
    const numsMap = new Map();
    for (let i = 0; i < nums.length; i += 1) {
      const num = nums[i];
      if (numsMap.has(num) && i - numsMap.get(num) <= k) {
        return true;
      } else {
        numsMap.set(num, i);
      }
    }
    return false;
  }

  console.log(
    "containsNearbyDuplicate([1, 2, 3, 1], 3):",
    containsNearbyDuplicate([1, 2, 3, 1], 3),
  ); // true
  console.log(
    "containsNearbyDuplicate([1, 0, 1, 1], 1):",
    containsNearbyDuplicate([1, 0, 1, 1], 1),
  ); // true
  console.log(
    "containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2):",
    containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2),
  ); // false
}
