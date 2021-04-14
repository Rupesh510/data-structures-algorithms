/**
 * Approach: Bubble Sort
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length; j += 1) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

bubbleSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
// [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]
