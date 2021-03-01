/**
 * Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/
 * Solution Ref: https://youtu.be/gwUGDXO5gHU
 */

{
  /**
   * Approach: Optimal
   * Time complexity: O(n)
   */

  function maxSubArray(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    for (let i = 1; i < nums.length; i += 1) {
      maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
      if (maxCurrent > maxGlobal) {
        maxGlobal = maxCurrent;
      }
    }
    return maxGlobal;
  }

  console.log(
    "maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]):",
    maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]),
  ); // 6
  console.log("maxSubArray([1]):", maxSubArray([1])); // 1
  console.log("maxSubArray([0]):", maxSubArray([0])); // 0
  console.log("maxSubArray([-1]):", maxSubArray([-1])); // -1
  console.log("maxSubArray([-100000]):", maxSubArray([-100000])); // -100000
}
