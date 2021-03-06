/**
 * Approach: Optimal
 * Time complexity: O(n)
 */

function containsDuplicate(nums) {
  let numbers = new Set();
  for (const num of nums) {
    if (!numbers.has(num)) {
      numbers.add(num);
    } else {
      return true;
    }
  }
  return false;
}
