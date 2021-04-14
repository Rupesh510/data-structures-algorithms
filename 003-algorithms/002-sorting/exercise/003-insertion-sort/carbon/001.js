/**
 * Approach: Insertion Sort
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i += 1) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      if (array[i] < array[i - 1]) {
        for (let j = 1; j < i; j += 1) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
  return array;
}

insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
// [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]
