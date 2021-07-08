/**
 * Problem: Rotate Array
 * Given an array, rotate the array to the right
 * by k steps, where k is non-negative.
 *
 * Example 1:
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 *
 * Example 2:
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 */

function rotateArray(nums, k) {
  if (!nums || nums.length === 0 || k === 0) {
    return nums;
  }

  k = k % nums.length;
  let temp = nums.slice(k);
  nums.splice(0, k);
  nums.push.apply(nums, temp);
  return nums;
}

rotateArray([1, 2, 3, 4, 5, 6, 7], 3); // [5,6,7,1,2,3,4]
rotateArray([-1, -100, 3, 99], 2); // [3,99,-1,-100]
