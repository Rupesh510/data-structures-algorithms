/**
 * Approach: Optimal (Hash Table)
 * More Details: Instantiating Global Map Object
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

function firstRecurringCharacter(input) {
  let numsMap = new Map();
  for (let i = 0; i < input.length; i += 1) {
    if (numsMap.has(input[i])) {
      return numsMap.get(input[i]);
    }
    numsMap.set(input[i], input[i]);
  }
  return;
}
