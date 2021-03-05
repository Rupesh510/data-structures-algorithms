/**
 * Linked List
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return this;
  }

  // insert(index, value) {}
}

const myLinkedList = new LinkedList(10);
console.log(
  "myLinkedList:",
  JSON.stringify(
    {
      data: myLinkedList,
      list: myLinkedList.printList(),
    },
    null,
    2,
  ),
);

console.log("\n================================\n");

console.log(
  "myLinkedList.append(5):",
  JSON.stringify(
    {
      data: myLinkedList.append(5),
      list: myLinkedList.printList(),
    },
    null,
    2,
  ),
);

console.log("\n================================\n");

console.log(
  "myLinkedList.append(16):",
  JSON.stringify(
    {
      data: myLinkedList.append(16),
      list: myLinkedList.printList(),
    },
    null,
    2,
  ),
);

console.log("\n================================\n");

console.log(
  "myLinkedList.prepend(1):",
  JSON.stringify(
    {
      data: myLinkedList.prepend(1),
      list: myLinkedList.printList(),
    },
    null,
    2,
  ),
);
