/**
 * Contains Common Item
 * @param {*} arr1
 * @param {*} arr2
 * @returns boolean
 *
 * Approach: Optimal, JavaScript's `Set` Global Object
 * Time Complexity: O(n1 + n2) => O(2n) => O(n)
 * Space Complexity: O(n1) => O(n)
 */
function containsCommonItem(arr1, arr2) {
  const commonItemsSet = new Set();

  for (let a1 = 0; a1 < arr1.length; a1 += 1) {
    const itemA1 = arr1[a1];

    if (!commonItemsSet.has(itemA1)) {
      commonItemsSet.add(itemA1);
    }
  }

  for (let a2 = 0; a2 < arr2.length; a2 += 1) {
    const itemA2 = arr2[a2];

    if (commonItemsSet.has(itemA2)) {
      return true;
    }
  }

  return false;
}

containsCommonItem(["a", "b", "c", "x"], ["z", "y", "i"]); // false
containsCommonItem(["a", "b", "c", "x"], ["z", "y", "x"]); // true
