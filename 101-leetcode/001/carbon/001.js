/**
 * Approach: Brute Force
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

function twoSum(nums, target) {
  for (let p1 = 0; p1 < nums.length; p1 += 1) {
    const numberToFind = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2 += 1) {
      if (numberToFind === nums[p2]) {
        return [p1, p2];
      }
    }
  }
  return null;
}
