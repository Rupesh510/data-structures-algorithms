/**
 * Implement Queue using Stacks
 * https://leetcode.com/problems/implement-queue-using-stacks/
 */

{
  class MyQueue {
    constructor() {}

    push(x) {}

    pop() {}

    peek() {}

    empty() {}
  }

  const myQueue = new MyQueue();

  myQueue.push(1);
  console.log(`myQueue:`, myQueue); // [1]

  myQueue.push(2);
  console.log(`myQueue:`, myQueue); // [1, 2]

  console.log(myQueue.peek()); // 1

  console.log(myQueue.pop()); // 1
  console.log(`myQueue:`, myQueue); // [2]

  console.log(myQueue.empty()); // false
}
