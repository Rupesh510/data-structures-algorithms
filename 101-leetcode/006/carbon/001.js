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
