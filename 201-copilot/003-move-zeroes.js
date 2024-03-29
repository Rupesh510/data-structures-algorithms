/**
 * Problem:  Move Zeroes
 * Given an integer array nums, move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 */

function moveZeroes(nums) {
  // Iterate through the array, if a number is 0, swap it with the last
  // non-zero number.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums[i] = nums[nums.length - 1];
      nums[nums.length - 1] = 0;
    }
  }
  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZeroes([0])); // [0]
