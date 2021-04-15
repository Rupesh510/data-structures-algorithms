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
