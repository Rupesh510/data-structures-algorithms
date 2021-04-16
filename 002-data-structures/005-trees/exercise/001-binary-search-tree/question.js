/**
 * Approach: Binary Search Tree
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

  insert(value) {}

  lookup(value) {}

  remove(value) {}
}

const traverse = (node) => ({
  value: node.value,
  left: node.left === null ? null : traverse(node.left),
  right: node.right === null ? null : traverse(node.right),
});

const tree = new BinarySearchTree();

console.log(`tree.lookup(12):`, tree.lookup(12)); // false
console.log(`tree.remove(16):`, tree.remove(16)); // false

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(15);
tree.insert(1);

console.log(
  `traverse(tree.root):`,
  JSON.stringify(traverse(tree.root), null, 2),
); // 👇 Tree Diagram Implementation
/**
 *      9
 *   4     20
 * 1  6  15  170
 */

console.log(`tree.lookup(15):`, tree.lookup(15)); // 15
console.log(`tree.lookup(14):`, tree.lookup(14)); // false

console.log(`tree.remove(170):`, tree.remove(170)); // true
console.log(`tree.remove(4):`, tree.remove(4)); // true
console.log(`tree.remove(5):`, tree.remove(5)); // false

console.log(
  `traverse(tree.root):`,
  JSON.stringify(traverse(tree.root), null, 2),
); // 👇 Tree Diagram Implementation
/**
 *          9
 *   6           20
 * 1   null   15   null
 */
