/**
 * Flatten a Multilevel Doubly Linked List
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 */

const {
  multiLinkedListBuilder,
  printListMulti,
} = require("./multi-linked-list");

{
  function flatten(head) {}

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
