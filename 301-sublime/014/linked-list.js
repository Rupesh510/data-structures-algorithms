class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function linkedListBuilder(linkedListArr) {
  return linkedListArr.reduce((acc, val) => new ListNode(val, acc), null);
}

function printList(head) {
  const arr = [];
  while (head !== null) {
    arr.unshift(head.val);
    head = head.next;
  }
  return arr;
}

module.exports = { linkedListBuilder, printList };
