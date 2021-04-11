class Queue {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[0];
  }

  enqueue(value) {
    this.array.unshift(value);
    return this;
  }

  dequeue() {
    this.array.shift();
    return this;
  }
}
