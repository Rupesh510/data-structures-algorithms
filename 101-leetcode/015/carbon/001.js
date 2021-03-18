/**
 * Approach: Optimal
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

function reverseBetween(head, left, right) {
  let currentPos = 1,
    currentNode = head,
    start = head;
  while (currentPos < left) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos += 1;
  }
  let newList = null,
    tail = currentNode;
  while (currentPos >= left && currentPos <= right) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPos += 1;
  }
  start.next = newList;
  tail.next = currentNode;
  if (left > 1) {
    return head;
  } else {
    return newList;
  }
}
