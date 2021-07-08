/**
 * Problem: Maximum Subarray
 * Given an integer array nums, find the contiguous subarray
 * (containing at least one number) which has the largest
 * sum and return its sum.
 *
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 *
 * Example 2:
 * Input: nums = [1]
 * Output: 1
 *
 * Example 3:
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 */

function maxSubArray(nums) {
  let max = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    max = Math.max(max, sum);
  }
  return max;
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6
maxSubArray([1]); // 1
maxSubArray([5, 4, -1, 7, 8]); // 23
