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
