/**
 * Approach: Optimal
 * More Details: Hash Map
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

function twoSum(nums, target) {
  const numsMap = {};
  for (let i = 0; i < nums.length; i += 1) {
    const currentMapVal = numsMap[nums[i]];
    if (currentMapVal >= 0) {
      return [currentMapVal, i];
    } else {
      const numberToFind = target - nums[i];
      numsMap[numberToFind] = i;
    }
  }
  return null;
}
