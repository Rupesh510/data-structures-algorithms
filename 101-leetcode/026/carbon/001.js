/**
 * Approach: Binary Search inside Binary Search
 * Time complexity: O(log n^2) => O(log n)
 * Space complexity: O(1)
 */

function countNodes(root) {
  if (!root) return root;

  let depth = 0,
    pointer = root;

  while (pointer.left) {
    pointer = pointer.left;
    depth += 1;
  }

  let left = 0,
    right = Math.pow(2, depth) - 1;

  while (left < right) {
    let mid = parseInt((left + right + 1) / 2);

    if (isValid(mid, depth, root)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return Math.pow(2, depth) - 1 + (left + 1);
}

function isValid(index, height, root) {
  while (height > 0) {
    let nodeCount = Math.pow(2, height);

    if (index < parseInt(nodeCount / 2)) {
      root = root.left;
    } else {
      root = root.right;
      index = index - parseInt(nodeCount / 2);
    }

    height -= 1;
  }

  return Boolean(root);
}
