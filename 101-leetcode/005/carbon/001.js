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
