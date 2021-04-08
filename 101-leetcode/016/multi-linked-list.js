class ListNode {
  constructor(val = 0, next = null, prev = null, child = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
    this.child = child;
  }
}

function multiLinkedListBuilder(nodes) {
  const head = new ListNode(nodes[0]);
  let currentNode = head;

  for (let i = 1; i < nodes.length; i++) {
    const val = nodes[i];
    let nextNode;

    if (Array.isArray(val)) {
      nextNode = multiLinkedListBuilder(val);
      currentNode.child = nextNode;
      continue;
    }

    nextNode = new ListNode(val);
    currentNode.next = nextNode;
    nextNode.prev = currentNode;
    currentNode = nextNode;
  }

  return head;
}

function printListMulti(head) {
  const arr = [];
  while (head !== null) {
    arr.unshift(head.val);

    if (head.child) {
      head = head.child;
    }

    head = head.next;
  }
  return arr;
}

module.exports = { multiLinkedListBuilder, printListMulti };
