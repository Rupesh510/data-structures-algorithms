/**
 * Approach: with Quick Sort and Recursion
 * Time complexity (Best/Average Case): O(n log n)
 * Time complexity (Worst Case): O(n^2)
 * Space complexity: O(log n)
 */

function findKthLargest(nums, k) {
  const indexToFind = nums.length - k;
  quickSort(nums, 0, nums.length - 1);
  return nums[indexToFind];
}

function quickSort(nums, leftIndex, rightIndex) {
  if (leftIndex < rightIndex) {
    const partitionIndex = getPartition(nums, leftIndex, rightIndex);
    quickSort(nums, leftIndex, partitionIndex - 1);
    quickSort(nums, partitionIndex + 1, rightIndex);
  }
}

function getPartition(nums, leftIndex, rightIndex) {
  const pivot = nums[rightIndex];
  let i = leftIndex;

  for (let j = leftIndex; j <= rightIndex; j += 1) {
    if (nums[j] <= pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i += 1;
    }
  }

  return i - 1;
}
