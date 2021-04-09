/**
 * Linked List Cycle II
 * https://leetcode.com/problems/linked-list-cycle-ii/
 */

const { linkedListBuilder } = require("./linked-list");

{
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

  console.log(
    `detectCycle([1, 2, 3, 4, 5, 6, 7, 8]), (pos = 2):`,
    (() => {
      try {
        detectCycle(linkedListBuilder([1, 2, 3, 4, 5, 6, 7, 8], 2));
        return true;
      } catch (error) {
        return false;
      }
    })(),
  );

  console.log(
    `detectCycle([3, 2, 0, -4]), (pos = 1):`,
    (() => {
      try {
        detectCycle(linkedListBuilder([3, 2, 0, -4], 1));
        return true;
      } catch (error) {
        return false;
      }
    })(),
  );

  console.log(
    `detectCycle([1, 2]), (pos = 0):`,
    (() => {
      try {
        detectCycle(linkedListBuilder([1, 2], 0));
        return true;
      } catch (error) {
        return false;
      }
    })(),
  );

  console.log(
    `detectCycle([1]), (pos = -1):`,
    (() => {
      try {
        detectCycle(linkedListBuilder([1], -1));
        return true;
      } catch (error) {
        return false;
      }
    })(),
  );
}

console.log("\n================================\n");

{
  /**
   * Approach: with Flyod's tortoise and hare Algorithm
   * Time complexity: O(n)
   * Space complexity: O(1)
   */

  function detectCycle(head) {
    if (!head) return null;
    let tortoise = head,
      hare = head;

    while (true) {
      tortoise = tortoise.next;
      hare = hare.next;

      if (hare === null || hare.next === null) {
        return null;
      } else {
        hare = hare.next;
      }

      if (tortoise === hare) break;
    }

    let p1 = head,
      p2 = tortoise;
    while (p1 !== p2) {
      p1 = p1.next;
      p2 = p2.next;
    }

    return p2;
  }

  console.log(
    `detectCycle([1, 2, 3, 4, 5, 6, 7, 8]), (pos = 2):`,
    (() => {
      try {
        detectCycle(linkedListBuilder([1, 2, 3, 4, 5, 6, 7, 8], 2));
        return true;
      } catch (error) {
        return false;
      }
    })(),
  );

  console.log(
    `detectCycle([3, 2, 0, -4]), (pos = 1):`,
    (() => {
      try {
        detectCycle(linkedListBuilder([3, 2, 0, -4], 1));
        return true;
      } catch (error) {
        return false;
      }
    })(),
  );

  console.log(
    `detectCycle([1, 2]), (pos = 0):`,
    (() => {
      try {
        detectCycle(linkedListBuilder([1, 2], 0));
        return true;
      } catch (error) {
        return false;
      }
    })(),
  );

  console.log(
    `detectCycle([1]), (pos = -1):`,
    (() => {
      try {
        detectCycle(linkedListBuilder([1], -1));
        return true;
      } catch (error) {
        return false;
      }
    })(),
  );
}
