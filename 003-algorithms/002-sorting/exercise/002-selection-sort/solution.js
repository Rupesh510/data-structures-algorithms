/**
 * Approach: Selection Sort
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i += 1) {
    let min = i;
    for (let j = i + 1; j < length; j += 1) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
  }
  return array;
}

console.log(
  `selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]):`,
  selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]),
); // [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]
