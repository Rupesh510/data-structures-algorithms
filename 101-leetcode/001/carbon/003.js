/**
 * Approach: Optimal
 * More Details: Hash Map with `Map` Global Object
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

function twoSum(nums, target) {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    const numberToFind = target - nums[i];
    if (numsMap.has(numberToFind)) {
      return [numsMap.get(numberToFind), i];
    }
    numsMap.set(nums[i], i);
  }
  return null;
}
