/**
 * Move Zeroes
 * https://leetcode.com/problems/move-zeroes/
 * Solution Ref: https://youtu.be/0rPuILjoVsg
 */

{
  /**
   * Approach: Optimal
   * Time complexity: O(n)
   */

  function moveZeroes(nums) {
    let p1 = 0;
    for (let p2 = 0; p2 < nums.length; p2 += 1) {
      if (nums[p2] !== 0) {
        [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
        p1 += 1;
      }
    }

    return nums;
  }

  console.log("moveZeroes([0, 1, 0, 3, 12]):", moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
  console.log(
    "moveZeroes([0, 0, 6, 0, 12, 1]):",
    moveZeroes([0, 0, 6, 0, 12, 1]),
  ); // [6, 12, 1, 0, 0, 0]
  console.log("moveZeroes([3, 0, 0, 12, 0]):", moveZeroes([3, 0, 0, 12, 0])); // [3, 12, 0, 0, 0]
}
