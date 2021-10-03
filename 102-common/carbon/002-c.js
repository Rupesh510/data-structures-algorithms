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

containsCommonItem(["a", "b", "c", "x"], ["z", "y", "i"]); // false
containsCommonItem(["a", "b", "c", "x"], ["z", "y", "x"]); // true
