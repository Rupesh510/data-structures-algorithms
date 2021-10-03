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

findPairIndicesWithSum([1, 2, 3, 9], 8); // null
findPairIndicesWithSum([1, 2, 4, 4], 8); // [ 2, 3 ]
