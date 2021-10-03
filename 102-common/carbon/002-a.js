/**
 * Contains Common Item
 * @param {*} arr1
 * @param {*} arr2
 * @returns boolean
 *
 * Approach: Brute Force
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function containsCommonItem(arr1, arr2) {
  for (let a1 = 0; a1 < arr1.length; a1 += 1) {
    for (let a2 = 0; a2 < arr2.length; a2 += 1) {
      if (arr1[a1] === arr2[a2]) {
        return true;
      }
    }
  }

  return false;
}

containsCommonItem(["a", "b", "c", "x"], ["z", "y", "i"]); // false
containsCommonItem(["a", "b", "c", "x"], ["z", "y", "x"]); // true
