class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function linkedListBuilder(linkedListArr, pos) {
  const value = linkedListArr[pos];

  const linkedList = linkedListArr
    .reverse()
    .reduce((acc, val) => new ListNode(val, acc), null);

  let curr = linkedList,
    cycleNode;
  while (curr.next !== null) {
    if (curr.val === value) {
      cycleNode = curr;
    }

    curr = curr.next;
  }

  curr.next = cycleNode;

  return linkedList;
}

module.exports = { linkedListBuilder };
