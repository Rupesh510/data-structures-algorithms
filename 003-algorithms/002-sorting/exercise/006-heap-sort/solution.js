/**
 * Approach: Heap Sort
 * Time complexity: O(n log n)
 * Space complexity: O(1)
 */

function heapSort(array) {
  let heapSize = array.length;
  buildHeap(array, heapSize);

  for (let i of range(heapSize - 1, 0, -1)) {
    [array[0], array[i]] = [array[i], array[0]];
    heapSize -= 1;
    maxHeapify(array, heapSize, 0);
  }

  return array;
}

function buildHeap(array, heapSize) {
  for (let i of range(Math.floor(heapSize / 2), -1, -1)) {
    maxHeapify(array, heapSize, i);
  }
}

function* range(start, stop, step = 1) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    yield i;
  }
}

function maxHeapify(array, heapSize, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }

  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    maxHeapify(array, heapSize, largest);
  }
}

console.log(heapSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
