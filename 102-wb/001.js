/**
 * Google's Example Coding/Engineering Interview
 * Question: https://www.youtube.com/watch?v=XKu_SEDAykw
 * nums: [1, 2, 3, 9], sum = 8 // false // null
 * nums: [1, 2, 4, 4], sum = 8 // true // [2, 3]
 */

{
  /**
   * Has Pair with Sum
   * Approach: Optimal, JavaScript's `Set` Global Object
   * Time complexity: O(n)
   * Space complexity: O(n)
   * @param {*} nums number[]
   * @param {*} sum number
   * @returns boolean
   */
  function hasPairWithSum(nums, sum) {
    const numsSet = new Set();

    for (let i = 0; i < nums.length; i += 1) {
      const numberToFind = sum - nums[i];

      if (numsSet.has(numberToFind)) {
        return true;
      }

      numsSet.add(nums[i]);
    }

    return false;
  }

  console.log(
    `hasPairWithSum([1, 2, 3, 9], 8):`,
    hasPairWithSum([1, 2, 3, 9], 8),
  ); // false

  console.log(
    `hasPairWithSum([1, 2, 4, 4], 8):`,
    hasPairWithSum([1, 2, 4, 4], 8),
  ); // true
}

console.log("\n================================\n");

{
  /**
   * Find Pair Indices with Sum
   * Approach: Optimal, JavaScript's `Map` Global Object
   * Time complexity: O(n)
   * Space complexity: O(n)
   * @param {*} nums number[]
   * @param {*} sum number
   * @returns null | number[]
   */
  function findPairIndicesWithSum(nums, sum) {
    const numsMap = new Map();

    for (let i = 0; i < nums.length; i += 1) {
      const numberToFind = sum - nums[i];

      if (numsMap.has(numberToFind)) {
        return [numsMap.get(nums[i]), i];
      }

      numsMap.set(nums[i], i);
    }

    return null;
  }

  console.log(
    `findPairIndicesWithSum([1, 2, 3, 9], 8):`,
    findPairIndicesWithSum([1, 2, 3, 9], 8),
  ); // null

  console.log(
    `findPairIndicesWithSum([1, 2, 4, 4], 8):`,
    findPairIndicesWithSum([1, 2, 4, 4], 8),
  ); // [2, 3]
}
