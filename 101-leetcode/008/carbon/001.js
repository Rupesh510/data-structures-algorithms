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
