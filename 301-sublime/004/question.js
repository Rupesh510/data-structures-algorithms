/**
 * Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/
 */

{
  function maxSubArray(nums) {}

  console.log(
    "maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]):",
    maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]),
  ); // 6
  console.log("maxSubArray([1]):", maxSubArray([1])); // 1
  console.log("maxSubArray([0]):", maxSubArray([0])); // 0
  console.log("maxSubArray([-1]):", maxSubArray([-1])); // -1
  console.log("maxSubArray([-100000]):", maxSubArray([-100000])); // -100000
}
