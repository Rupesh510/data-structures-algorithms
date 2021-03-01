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
