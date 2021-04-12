/**
 * Implement Queue using Stacks
 * https://leetcode.com/problems/implement-queue-using-stacks/
 */

{
  /**
   * Approach: with Stack
   * Time complexity: O(n)
   * Space complexity: O(n)
   */

  class MyQueue {
    constructor() {
      this.in = [];
      this.out = [];
    }

    push(x) {
      this.in.push(x);
      return x;
    }

    pop() {
      if (this.out.length === 0) {
        while (this.in.length > 0) {
          this.out.push(this.in.pop());
        }
      }

      return this.out.pop();
    }

    peek() {
      if (this.out.length === 0) {
        while (this.in.length > 0) {
          this.out.push(this.in.pop());
        }
      }

      return this.out[this.out.length - 1];
    }

    empty() {
      return this.in.length === 0 && this.out.length === 0;
    }
  }

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
