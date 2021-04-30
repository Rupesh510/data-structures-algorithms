function isValidBST(root) {
  if (!root) return true;
  return depthFirstSearch(root, -Infinity, Infinity);
}

function depthFirstSearch(node, min, max) {
  if (node.val <= min || node.val >= max) {
    return false;
  }

  if (node.left && !depthFirstSearch(node.left, min, node.val)) {
    return false;
  }

  if (node.right && !depthFirstSearch(node.right, node.val, max)) {
    return false;
  }

  return true;
}
