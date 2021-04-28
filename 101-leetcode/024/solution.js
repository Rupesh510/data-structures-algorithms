/**
 * Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

{
  function levelOrder(root) {
    let result = [];
    if (root === null) return result;

    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
      let row = [];
      let rowSize = queue.length;

      while (rowSize > 0) {
        let currentNode = queue.shift();

        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }

        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }

        row.push(currentNode.val);
        rowSize -= 1;
      }

      result.push(row);
    }

    return result;
  }

  console.log(`
    Please run the solution code with tests cases at Leetcode website instead,
    https://leetcode.com/problems/maximum-depth-of-binary-tree/
  `);
}
