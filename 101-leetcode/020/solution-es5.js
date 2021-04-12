/**
 * Implement Queue using Stacks
 * https://leetcode.com/problems/implement-queue-using-stacks/
 */

{
  function MyQueue() {}

  MyQueue.prototype.push = function (x) {};

  MyQueue.prototype.pop = function () {};

  MyQueue.prototype.peek = function () {};

  MyQueue.prototype.empty = function () {};

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
