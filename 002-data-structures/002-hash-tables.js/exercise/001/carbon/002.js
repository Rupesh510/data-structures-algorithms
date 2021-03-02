/**
 * Approach: Optimal (Hash Table)
 * More Details: Custom Hash Map
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

function firstRecurringCharacter(input) {
  let numsMap = {};
  for (let i = 0; i < input.length; i += 1) {
    if (numsMap[input[i]] !== undefined) {
      return input[i];
    } else {
      numsMap[input[i]] = i;
    }
  }
  return;
}
