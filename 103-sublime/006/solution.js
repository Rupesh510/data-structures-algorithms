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
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums;
  }

  function reverse(nums, p1, p2) {
    while (p1 < p2) {
      [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
      p1 += 1;
      p2 -= 1;
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
    /**
     * nums = [5, 6, 7, 1, 2, 3, 4]
     * k = 1
     */
    k = k % nums.length;
    while (k > 0) { // true
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
