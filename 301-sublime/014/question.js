/**
 * Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/
 */

const { linkedListBuilder, printList } = require("./linked-list");

{
  function reverseList(head) {}

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
