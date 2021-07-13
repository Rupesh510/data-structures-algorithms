/**
 * Has Pair
 * Google's Example Coding/Engineering Interview
 * Question: https://www.youtube.com/watch?v=XKu_SEDAykw
 * nums: [1, 2, 3, 9], target = 8 // false
 * nums: [1, 2, 4, 4], target = 8 // true
 *
 */

{
  /**
   * Approach: Brute Force
   * Time complexity: O(n^2)
   * Space complexity: O(1)
   */

  function hasPair(nums, target) {
    for (let p1 = 0; p1 < nums.length; p1 += 1) {
      const numberToFind = target - nums[p1];
      for (let p2 = p1 + 1; p2 < nums.length; p2 += 1) {
        if (numberToFind === nums[p2]) {
          return true;
        }
      }
    }

    return false;
  }

  console.log("hasPair([2, 7, 11, 15], 9):", hasPair([2, 7, 11, 15], 9)); // true
  console.log("hasPair([3, 2, 4], 6):", hasPair([3, 2, 4], 6)); // true
  console.log("hasPair([3, 3], 6):", hasPair([3, 3], 6)); // true
  console.log("hasPair([1, 3, 7, 9, 2], 11):", hasPair([1, 3, 7, 9, 2], 11)); // true
  console.log("hasPair([5], 11):", hasPair([5], 11)); // false
  console.log("hasPair([], 11):", hasPair([5], 11)); // false
}

console.log("\n================================\n");

{
  /**
   * Approach: Optimal
   * More Details: Hash Map
   * Time complexity: O(n)
   * Space complexity: O(n)
   */

  function hasPair(nums, target) {
    const numsMap = {};
    for (let i = 0; i < nums.length; i += 1) {
      const currentMapVal = numsMap[nums[i]];
      if (currentMapVal >= 0) {
        return true;
      } else {
        const numberToFind = target - nums[i];
        numsMap[numberToFind] = i;
      }
    }
    return false;
  }

  console.log("hasPair([2, 7, 11, 15], 9):", hasPair([2, 7, 11, 15], 9)); // true
  console.log("hasPair([3, 2, 4], 6):", hasPair([3, 2, 4], 6)); // true
  console.log("hasPair([3, 3], 6):", hasPair([3, 3], 6)); // true
  console.log("hasPair([1, 3, 7, 9, 2], 11):", hasPair([1, 3, 7, 9, 2], 11)); // true
  console.log("hasPair([5], 11):", hasPair([5], 11)); // false
  console.log("hasPair([], 11):", hasPair([5], 11)); // false
}

console.log("\n================================\n");

{
  /**
   * Approach: Optimal
   * More Details: Hash Map with `Set` Global Object
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
   * Time complexity: O(n)
   * Space complexity: O(n)
   */

  function hasPair(nums, target) {
    const numsSet = new Set();
    for (let i = 0; i < nums.length; i += 1) {
      const numberToFind = target - nums[i];
      if (numsSet.has(numberToFind)) {
        return true;
      }
      numsSet.add(nums[i]);
    }
    return false;
  }

  console.log("hasPair([2, 7, 11, 15], 9):", hasPair([2, 7, 11, 15], 9)); // true
  console.log("hasPair([3, 2, 4], 6):", hasPair([3, 2, 4], 6)); // true
  console.log("hasPair([3, 3], 6):", hasPair([3, 3], 6)); // true
  console.log("hasPair([1, 3, 7, 9, 2], 11):", hasPair([1, 3, 7, 9, 2], 11)); // true
  console.log("hasPair([5], 11):", hasPair([5], 11)); // false
  console.log("hasPair([], 11):", hasPair([5], 11)); // false
}
