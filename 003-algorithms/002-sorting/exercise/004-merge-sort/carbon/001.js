/**
 * Approach: Merge Sort
 * Time complexity: O(n log n)
 * Space complexity: O(n)
 */

function mergeSort(array) {
  const length = array.length;
  if (length === 1) return array;
  const midIdx = Math.floor(length / 2);
  const left = array.slice(0, midIdx);
  const right = array.slice(midIdx);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

mergeSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
// [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]
