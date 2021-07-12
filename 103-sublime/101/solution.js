/**
 * Two Sum
 * https://leetcode.com/problems/two-sum/
 * Solution Ref: https://www.udemy.com/share/103J2KAEsSeFtRQX4=/
 *
 */

{
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

  console.log("twoSum([2, 7, 11, 15], 9):", twoSum([2, 7, 11, 15], 9)); // [0, 1]
  console.log("twoSum([3, 2, 4], 6):", twoSum([3, 2, 4], 6)); // [1, 2]
  console.log("twoSum([3, 3], 6):", twoSum([3, 3], 6)); // [0, 1]
  console.log("twoSum([1, 3, 7, 9, 2], 11):", twoSum([1, 3, 7, 9, 2], 11)); // [3, 4]
  console.log("twoSum([5], 11):", twoSum([5], 11)); // null
  console.log("twoSum([], 11):", twoSum([5], 11)); // null
}

console.log("\n================================\n");

{
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

  console.log("twoSum([2, 7, 11, 15], 9):", twoSum([2, 7, 11, 15], 9)); // [0, 1]
  console.log("twoSum([3, 2, 4], 6):", twoSum([3, 2, 4], 6)); // [1, 2]
  console.log("twoSum([3, 3], 6):", twoSum([3, 3], 6)); // [0, 1]
  console.log("twoSum([1, 3, 7, 9, 2], 11):", twoSum([1, 3, 7, 9, 2], 11)); // [3, 4]
  console.log("twoSum([5], 11):", twoSum([5], 11)); // null
  console.log("twoSum([], 11):", twoSum([5], 11)); // null
}

console.log("\n================================\n");

{
  /**
   * Approach: Optimal
   * More Details: Hash Map with `Map` Global Object
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
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

  console.log("twoSum([2, 7, 11, 15], 9):", twoSum([2, 7, 11, 15], 9)); // [0, 1]
  console.log("twoSum([3, 2, 4], 6):", twoSum([3, 2, 4], 6)); // [1, 2]
  console.log("twoSum([3, 3], 6):", twoSum([3, 3], 6)); // [0, 1]
  console.log("twoSum([1, 3, 7, 9, 2], 11):", twoSum([1, 3, 7, 9, 2], 11)); // [3, 4]
  console.log("twoSum([5], 11):", twoSum([5], 11)); // null
  console.log("twoSum([], 11):", twoSum([5], 11)); // null
}
