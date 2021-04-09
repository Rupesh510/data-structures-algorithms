/**
 * Approach: with JavaScript Sets
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

function detectCycle(head) {
  const seenNodes = new Set();
  let currentNode = head;

  while (!seenNodes.has(currentNode)) {
    if (currentNode.next === null) {
      return false;
    }
    seenNodes.add(currentNode);
    currentNode = currentNode.next;
  }

  return currentNode;
}
