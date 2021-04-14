/**
 * Approach: Quick Sort
 * Time complexity: O(n log n)
 * Space complexity: O(log n)
 */

function quickSort(array, leftIndex = 0, rightIndex = array.length - 1) {
  let pivot;
  let partitionIndex;

  if (leftIndex < rightIndex) {
    pivot = rightIndex;
    partitionIndex = partition(array, pivot, leftIndex, rightIndex);
    quickSort(array, leftIndex, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, rightIndex);
  }

  return array;
}

function partition(array, pivot, leftIndex, rightIndex) {
  let pivotValue = array[pivot];
  let partitionIndex = leftIndex;

  for (let i = leftIndex; i < rightIndex; i += 1) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(array, rightIndex, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  [array[firstIndex], array[secondIndex]] = [
    array[secondIndex],
    array[firstIndex],
  ];
}

quickSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
// [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]
