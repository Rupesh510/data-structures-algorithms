/**
 * Given 2 arrays, create a function that let's a user
 * know (true/false) whether these two arrays contains
 * any common items.
 *
 * Example:
 * containsCommonItem(
 *   ["a", "b", "c", "x"],
 *   ["z", "y", "i"],
 * ); // false
 * containsCommonItem(
 *   ["a", "b", "c", "x"],
 *   ["z", "y", "x"],
 * ); // true
 */

{
  /**
   * Contains Common Item
   * @param {*} arr1
   * @param {*} arr2
   * @returns boolean
   *
   * Approach: Brute Force
   * Time Complexity: O(n1 x n2) => O(n^2)
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

  console.log(
    `containsCommonItem(["a", "b", "c", "x"], ["z", "y", "i"]):`,
    containsCommonItem(["a", "b", "c", "x"], ["z", "y", "i"]),
  ); // false

  console.log(
    `containsCommonItem(["a", "b", "c", "x"], ["z", "y", "x"]):`,
    containsCommonItem(["a", "b", "c", "x"], ["z", "y", "x"]),
  ); // true
}

console.log("\n================================\n");

{
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

  console.log(
    `containsCommonItem(["a", "b", "c", "x"], ["z", "y", "i"]):`,
    containsCommonItem(["a", "b", "c", "x"], ["z", "y", "i"]),
  ); // false

  console.log(
    `containsCommonItem(["a", "b", "c", "x"], ["z", "y", "x"]):`,
    containsCommonItem(["a", "b", "c", "x"], ["z", "y", "x"]),
  ); // true
}

console.log("\n================================\n");

{
  /**
   * Contains Common Item
   * @param {*} arr1
   * @param {*} arr2
   * @returns boolean
   *
   * Approach: Quick, JavaScript `some` & `includes`
   */
  function containsCommonItem(arr1, arr2) {
    return arr1.some((itemA1) => {
      return arr2.includes(itemA1);
    });
  }

  console.log(
    `containsCommonItem(["a", "b", "c", "x"], ["z", "y", "i"]):`,
    containsCommonItem(["a", "b", "c", "x"], ["z", "y", "i"]),
  ); // false

  console.log(
    `containsCommonItem(["a", "b", "c", "x"], ["z", "y", "x"]):`,
    containsCommonItem(["a", "b", "c", "x"], ["z", "y", "x"]),
  ); // true
}
