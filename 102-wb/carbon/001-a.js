/**
 * Contains Common Item
 * @param {*} arr1
 * @param {*} arr2
 * @returns boolean
 *
 * Approach: Brute Force
 * Time Complexity: O(n1 x n2) => O(n^2)
 * Space Complexity: O(1)
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
