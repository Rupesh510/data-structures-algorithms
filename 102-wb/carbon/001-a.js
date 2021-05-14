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

hasPairWithSum([1, 2, 3, 9], 8); // false
hasPairWithSum([1, 2, 4, 4], 8); // true
