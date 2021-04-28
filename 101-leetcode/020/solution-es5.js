/**
 * Implement Queue using Stacks
 * https://leetcode.com/problems/implement-queue-using-stacks/
 * Solution Ref: https://www.udemy.com/share/103J2KAEsSeFtRQX4=/
 */

{
  /**
   * Approach: with Stack
   * Time complexity: O(n)
   * Space complexity: O(n)
   */

  function MyQueue() {
    this.in = [];
    this.out = [];
  }

  MyQueue.prototype.push = function (x) {
    this.in.push(x);
    return x;
  };

  MyQueue.prototype.pop = function () {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }

    return this.out.pop();
  };

  MyQueue.prototype.peek = function () {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }

    return this.out[this.out.length - 1];
  };

  MyQueue.prototype.empty = function () {
    return this.in.length === 0 && this.out.length === 0;
  };

  const myQueue = new MyQueue();

  console.log(`myQueue.push(1):`, myQueue.push(1)); // 1

  console.log(`myQueue:`, myQueue); // MyQueue { in: [ 1 ], out: [] }

  console.log(`myQueue.push(2):`, myQueue.push(2)); // 2

  console.log(`myQueue:`, myQueue); // MyQueue { in: [ 1, 2 ], out: [] }

  console.log(`myQueue.peek():`, myQueue.peek()); // 1

  console.log(`myQueue.pop():`, myQueue.pop()); // 1

  console.log(`myQueue:`, myQueue); // MyQueue { in: [], out: [ 2 ] }

  console.log(`myQueue.empty():`, myQueue.empty()); // false
}
