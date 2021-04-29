/**
 * Approach: Depth First Search
 */

function rightSideView(root) {
  const values = [];
  if (!root) return values;

  function depthFirstSearch(root, level) {
    if (values[level] === undefined) {
      values[level] = root.val;
    }

    if (root.right) {
      depthFirstSearch(root.right, level + 1);
    }

    if (root.left) {
      depthFirstSearch(root.left, level + 1);
    }
  }

  depthFirstSearch(root, 0);
  return values;
}
