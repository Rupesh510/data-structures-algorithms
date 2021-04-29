/**
 * Binary Tree Right Side View
 * https://leetcode.com/problems/binary-tree-right-side-view/
 */

{
  /**
   * Approach: Breadth First Search
   */

  function rightSideView(root) {
    const values = [];
    if (!root) return values;

    const queue = [root];
    while (queue.length) {
      let count = queue.length;
      let temp;
      while (count) {
        let current = queue.shift();
        temp = current.val;

        if (current.left) {
          queue.push(current.left);
        }

        if (current.right) {
          queue.push(current.right);
        }

        count -= 1;
      }
      values.push(temp);
    }

    return values;
  }

  console.log(`
    --- Approach: Breadth First Search ---
    Please run the solution code with tests cases at Leetcode website instead,
    https://leetcode.com/problems/binary-tree-right-side-view/
  `);
}

{
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

  console.log(`
    --- Approach: Depth First Search ---
    Please run the solution code with tests cases at Leetcode website instead,
    https://leetcode.com/problems/binary-tree-right-side-view/
  `);
}
