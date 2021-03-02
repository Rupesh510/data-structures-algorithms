/**
 * Approach: Brute Force
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

function firstRecurringCharacter(input) {
  for (let i = 1; i < input.length; i += 1) {
    for (let j = i - 1; j >= 0; j -= 1) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return;
}
