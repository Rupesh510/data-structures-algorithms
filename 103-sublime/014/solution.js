/**
 * Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/
 * Solution Ref: https://www.udemy.com/share/103J2KAEsSeFtRQX4=/
 */

const { linkedListBuilder, printList } = require("./linked-list");

{
  /**
   * Approach: Optimal
   * Time complexity: O(n)
   * Space complexity: O(1)
   */

  function reverseList(head) {
    let prev = null;
    let current = head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }

  console.log(
    `reverseList([1, 2, 3, 4, 5]):`,
    printList(reverseList(linkedListBuilder([1, 2, 3, 4, 5]))),
  ); // [5, 4, 3, 2, 1]

  console.log(
    `reverseList([1, 2]):`,
    printList(reverseList(linkedListBuilder([1, 2]))),
  ); // [2, 1]

  console.log(
    `reverseList([]):`,
    printList(reverseList(linkedListBuilder([]))),
  ); // []
}
