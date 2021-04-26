/**
 * Find First and Last Position of Element in Sorted Array
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

{
  function searchRange(nums, target) {}

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
