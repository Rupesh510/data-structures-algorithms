const myQueue = new MyQueue();
myQueue.push(1); // 1
myQueue; // MyQueue { in: [ 1 ], out: [] }
myQueue.push(2); // 2
myQueue; // MyQueue { in: [ 1, 2 ], out: [] }
myQueue.peek(); // 1
myQueue.pop(); // 1
myQueue; // MyQueue { in: [], out: [ 2 ] }
myQueue.empty(); // false
