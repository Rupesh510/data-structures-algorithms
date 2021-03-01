/**
 * Rotate Array
 * https://leetcode.com/problems/rotate-array/
 * Solution Ref:
 * 1. https://youtu.be/T9zQP1IkMDE
 * 2. https://youtu.be/vxitl6x7qCs
 */

{
  /**
   * Approach: Optimal - Using Reverse
   * Time complexity: O(n)
   * Space complexity: O(1)
   */

  function rotate(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, k, nums.length - 1);
    reverse(nums, 0, k - 1);
    return nums;
  }

  function reverse(nums, start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start += 1;
      end -= 1;
    }
  }

  console.log(
    "rotate([1, 2, 3, 4, 5, 6, 7], 3):",
    rotate([1, 2, 3, 4, 5, 6, 7], 3),
  ); // [5, 6, 7, 1, 2, 3, 4]
  console.log("rotate([-1, -100, 3, 99], 2):", rotate([-1, -100, 3, 99], 2)); // [3, 99, -1, -100]
}

console.log("\n================================\n");

{
  /**
   * Approach: Optimal - Using Pop / Unshift
   * Time complexity: O(n)
   * Space complexity: O(1)
   */

  function rotate(nums, k) {
    k = k % nums.length;
    while (k > 0) {
      nums.unshift(nums.pop());
      k -= 1;
    }
    return nums;
  }

  console.log(
    "rotate([1, 2, 3, 4, 5, 6, 7], 3):",
    rotate([1, 2, 3, 4, 5, 6, 7], 3),
  ); // [5, 6, 7, 1, 2, 3, 4]
  console.log("rotate([-1, -100, 3, 99], 2):", rotate([-1, -100, 3, 99], 2)); // [3, 99, -1, -100]
}
