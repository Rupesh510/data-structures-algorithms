function levelOrder(root) {
  let result = [];
  if (root === null) return result;

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let row = [];
    let queueSize = queue.length;

    while (queueSize > 0) {
      let currentNode = queue.shift();

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }

      row.push(currentNode.val);
      queueSize -= 1;
    }

    result.push(row);
  }

  return result;
}
