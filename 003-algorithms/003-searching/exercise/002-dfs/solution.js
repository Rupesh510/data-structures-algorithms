/**
 * Depth First Search in Binary Search Tree
 */

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {}

  lookup(value) {}

  remove(value) {}

  DepthFirstSearchPreOrder() {}

  DepthFirstSearchInOrder() {}

  DepthFirstSearchPostOrder() {}
}

const traverse = (node) => ({
  value: node.value,
  left: node.left === null ? null : traverse(node.left),
  right: node.right === null ? null : traverse(node.right),
});

const tree = new BinarySearchTree();
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
); // 👇 Tree Diagram Implementation
/**
 *      9
 *   4     20
 * 1  6  15  170
 */

console.log(
  `tree.DepthFirstSearchPreOrder():`,
  JSON.stringify(tree.DepthFirstSearchPreOrder(), null, 2),
); //

console.log(
  `tree.DepthFirstSearchPreOrder():`,
  JSON.stringify(tree.DepthFirstSearchPreOrder(), null, 2),
); //

console.log(
  `tree.DepthFirstSearchPreOrder():`,
  JSON.stringify(tree.DepthFirstSearchPreOrder(), null, 2),
); //
