{
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

  const myQueue = new Queue();

  console.log(`myQueue.enqueue("larry"): `, myQueue.enqueue("larry"));
  console.log(`myQueue.enqueue("bezos"): `, myQueue.enqueue("bezos"));
  console.log(`myQueue.enqueue("zuck"): `, myQueue.enqueue("zuck"));
  console.log(`myQueue.enqueue("jack"): `, myQueue.enqueue("jack"));
  console.log(`myQueue.peek(): `, myQueue.peek());
  console.log(`myQueue.dequeue(): `, myQueue.dequeue());
  console.log(`myQueue.dequeue(): `, myQueue.dequeue());
  console.log(`myQueue.dequeue(): `, myQueue.dequeue());
  console.log(`myQueue.dequeue(): `, myQueue.dequeue());
  console.log(`myQueue.peek(): `, myQueue.peek());
}
