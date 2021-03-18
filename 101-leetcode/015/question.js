/**
 * Reverse Linked List II (Reverse Between)
 * https://leetcode.com/problems/reverse-linked-list-ii/
 */

const { linkedListBuilder, printList } = require("./linked-list");

{
  function reverseBetween(head, left, right) {}

  console.log(
    `reverseBetween([1, 2, 3, 4, 5], 2, 4):`,
    printList(reverseBetween(linkedListBuilder([1, 2, 3, 4, 5]), 2, 4)),
  ); // [1, 4, 3, 2, 5]

  console.log(
    `reverseBetween([5], 1, 1):`,
    printList(reverseBetween(linkedListBuilder([5]), 1, 1)),
  ); // [5]
}
