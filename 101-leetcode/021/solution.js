/**
 * Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 */

{
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

  console.log(
    `findKthLargest([3, 2, 1, 5, 6, 4], 2):`,
    findKthLargest([3, 2, 1, 5, 6, 4], 2),
  ); // 5

  console.log(
    `findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4):`,
    findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4),
  ); // 4
}

console.log("\n================================\n");

{
  /**
   * Approach: with Quick Select and Tail Recursion
   * Time complexity (Best/Average Case): O(n)
   * Time complexity (Worst Case): O(n^2)
   * Space complexity: O(1)
   */

  function findKthLargest(nums, k) {
    const indexToFind = nums.length - k;
    return quickSelect(nums, 0, nums.length - 1, indexToFind);
  }

  function quickSelect(nums, leftIndex, rightIndex, indexToFind) {
    const partitionIndex = getPartition(nums, leftIndex, rightIndex);

    if (partitionIndex === indexToFind) {
      return nums[partitionIndex];
    } else if (indexToFind < partitionIndex) {
      return quickSelect(nums, leftIndex, partitionIndex - 1, indexToFind);
    } else {
      return quickSelect(nums, partitionIndex + 1, rightIndex, indexToFind);
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

  console.log(
    `findKthLargest([3, 2, 1, 5, 6, 4], 2):`,
    findKthLargest([3, 2, 1, 5, 6, 4], 2),
  ); // 5

  console.log(
    `findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4):`,
    findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4),
  ); // 4
}
