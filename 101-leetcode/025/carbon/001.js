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
