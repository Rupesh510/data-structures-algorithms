/**
 * Approach: Optimal (Hash Table)
 * More Details: Instantiating Global Set Object
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

function firstRecurringCharacter(input) {
  let numsSet = new Set();
  for (let i = 0; i < input.length; i += 1) {
    if (numsSet.has(input[i])) {
      return input[i];
    }
    numsSet.add(input[i]);
  }
  return;
}
