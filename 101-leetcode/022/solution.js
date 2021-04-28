/**
 * Find First and Last Position of Element in Sorted Array
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * Solution Ref: https://www.udemy.com/share/103J2KAEsSeFtRQX4=/
 */

{
  /**
   * Approach: Recursion (Binary Search)
   * Time complexity: O(log n)
   * Space complexity: O(1)
   */

  function searchRange(nums, target) {
    if (nums.length < 1) return [-1, -1];

    const firstPos = binarySearch(nums, 0, nums.length - 1, target);
    if (firstPos === -1) return [-1, -1];

    let endPos = firstPos,
      startPos = firstPos,
      temp1,
      temp2;

    while (startPos !== -1) {
      temp1 = startPos;
      startPos = binarySearch(nums, 0, startPos - 1, target);
    }
    startPos = temp1;

    while (endPos !== -1) {
      temp2 = endPos;
      endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
    }
    endPos = temp2;

    return [startPos, endPos];
  }

  function binarySearch(nums, left, right, target) {
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const foundVal = nums[mid];
      if (foundVal === target) {
        return mid;
      } else if (foundVal < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  }

  console.log(
    `searchRange([5, 7, 7, 8, 8, 10], 8):`,
    searchRange([5, 7, 7, 8, 8, 10], 8),
  ); // [3, 4]

  console.log(
    `searchRange([5, 7, 7, 8, 8, 10], 6):`,
    searchRange([5, 7, 7, 8, 8, 10], 6),
  ); // [-1, -1]

  console.log(`searchRange([], 0):`, searchRange([], 0)); // [-1, -1]
}
