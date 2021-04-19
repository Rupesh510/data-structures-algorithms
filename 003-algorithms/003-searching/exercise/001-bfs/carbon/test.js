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

tree.BreadthFirstSearch(); // [9, 4, 20, 1, 6, 15, 170];

tree.BreadthFirstSearchRecursive([tree.root], []); // [9, 4, 20, 1, 6, 15, 170];
