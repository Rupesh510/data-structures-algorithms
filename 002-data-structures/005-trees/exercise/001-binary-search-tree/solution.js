/**
 * Approach: Binary Search Tree
 * Time complexity (Best/Average Case): O(log n)
 * Time complexity (Worst Case): O(n)
 * Space complexity: O(n)
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }

          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }

          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;
    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }

    return null;
  }

  remove(value) {}
}

const traverse = (node) => ({
  value: node.value,
  left: node.left === null ? null : traverse(node.left),
  right: node.right === null ? null : traverse(node.right),
});

const tree = new BinarySearchTree();

console.log(
  `tree.lookup(12):`,
  tree.lookup(12) ? tree.lookup(12).value : tree.lookup(12),
);

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(
  `traverse(tree.root):`,
  JSON.stringify(traverse(tree.root), null, 2),
);
/**
 *      9
 *   4     20
 * 1  6  15  170
 */

console.log(
  `tree.lookup(15):`,
  tree.lookup(15) ? tree.lookup(15).value : tree.lookup(15),
); // 15

console.log(
  `tree.lookup(14):`,
  tree.lookup(14) ? tree.lookup(14).value : tree.lookup(14),
); // null
