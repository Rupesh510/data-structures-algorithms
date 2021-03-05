/**
 * Linked List
 */

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
console.log("myLinkedList:", JSON.stringify(myLinkedList, null, 2));
console.log(
  "myLinkedList.append(5):",
  JSON.stringify(myLinkedList.append(5), null, 2),
);
console.log(
  "myLinkedList.append(16):",
  JSON.stringify(myLinkedList.append(16), null, 2),
);
