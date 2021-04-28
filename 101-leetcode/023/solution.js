/**
 * Maximum Depth of Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */

{
  function maxDepth(root) {
    function maxNodes(node, sum) {
      if (node === null) return sum;

      return Math.max(
        maxNodes(node.left, sum + 1),
        maxNodes(node.right, sum + 1),
      );
    }

    return maxNodes(root, 0);
  }

  console.log(`
    Please run the solution code with tests cases at Leetcode website instead,
    https://leetcode.com/problems/maximum-depth-of-binary-tree/
  `);
}
