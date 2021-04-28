/**
 * Reverse Linked List II (Reverse Between)
 * https://leetcode.com/problems/reverse-linked-list-ii/
 * Solution Ref: https://www.udemy.com/share/103J2KAEsSeFtRQX4=/
 */

const { linkedListBuilder, printList } = require("./linked-list");

{
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

  console.log(
    `reverseBetween([1, 2, 3, 4, 5], 2, 4):`,
    printList(reverseBetween(linkedListBuilder([1, 2, 3, 4, 5]), 2, 4)),
  ); // [1, 4, 3, 2, 5]

  console.log(
    `reverseBetween([5], 1, 1):`,
    printList(reverseBetween(linkedListBuilder([5]), 1, 1)),
  ); // [5]
}
