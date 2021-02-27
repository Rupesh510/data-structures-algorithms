/**
 * Big-O Complexity of Array Methods
 */

{
  const strings = ["a", "b", "c", "d"];

  console.log("strings:", strings);

  console.log("2nd Index:", strings[2]); // 0(1)

  // Push
  strings.push("e"); // O(1)
  console.log("Push `e`:", strings);

  // Pop
  strings.pop(); // O(1)
  strings.pop(); // O(1)
  console.log("Pop twice:", strings);

  // Unshift
  strings.unshift("x"); // O(n)
  console.log("Unshift `x`:", strings);

  strings.splice(2, 0, "alien"); // O(n)
  console.log("Splice `alien` at 2nd index:", strings);
}
