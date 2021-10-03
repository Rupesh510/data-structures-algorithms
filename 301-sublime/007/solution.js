/**
 * Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 * Solution Ref: https://youtu.be/umqL2CyEywM
 */

{
  /**
   * Approach: Optimal
   * Time complexity: O(n)
   */

  function containsDuplicate(nums) {
    const numbers = new Set();
    for (const num of nums) {
      if (numbers.has(num)) {
        return true;
      } else {
        numbers.add(num);
      }
    }
    return false;
  }

  console.log(
    "containsDuplicate([1, 2, 3, 1]):",
    containsDuplicate([1, 2, 3, 1]),
  ); // true
  console.log(
    "containsDuplicate([1, 2, 3, 4]):",
    containsDuplicate([1, 2, 3, 4]),
  ); // false
  console.log(
    "containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]):",
    containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]),
  ); // true
}
