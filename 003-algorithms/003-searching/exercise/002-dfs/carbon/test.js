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

traverse(tree.root); // {...} // JSON Code
// 👇 Tree Diagram Implementation of JSON Code
/**
 *      9
 *   4     20
 * 1  6  15  170
 */

tree.DepthFirstSearchPreOrder(); // [9, 4, 1, 6, 20, 15, 170]

tree.DepthFirstSearchInOrder(); // [1, 4, 6, 9, 15, 20, 170]

tree.DepthFirstSearchPostOrder(); // [1, 6, 4, 15, 170, 20, 9]
