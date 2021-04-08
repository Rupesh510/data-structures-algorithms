/**
 * Flatten a Multilevel Doubly Linked List
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 */

const {
  multiLinkedListBuilder,
  printListMulti,
} = require("./multi-linked-list");

{
  /**
   * Approach: Optimal
   * Time complexity: O(n)
   * Space complexity: O(1)
   */

  function flatten(head) {
    if (!head) return head;

    let currentNode = head;
    while (currentNode !== null) {
      if (currentNode.child === null) {
        currentNode = currentNode.next;
      } else {
        let tail = currentNode.child;
        while (tail.next !== null) {
          tail = tail.next;
        }

        tail.next = currentNode.next;
        if (tail.next !== null) {
          tail.next.prev = tail;
        }

        currentNode.next = currentNode.child;
        currentNode.next.prev = currentNode;
        currentNode.child = null;
      }
    }

    return head;
  }

  console.log(
    `flatten([1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6]):`,
    printListMulti(
      flatten(
        multiLinkedListBuilder([
          1,
          [2, 7, [8, 10, 11], 9],
          3,
          4,
          [5, 12, 13],
          6,
        ]),
      ),
    ),
  ); // [6, 13, 12, 5, 4, 3, 9, 11, 10, 8, 7, 2, 1]
}
