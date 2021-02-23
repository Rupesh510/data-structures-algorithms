/**
 * O(n^2)
 */

{
  const boxes = ["a", "b", "c", "d", "e"];

  // Log all Pairs of Array
  function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        const elementI = array[i];
        const elementJ = array[j];
        console.log([elementI, elementJ]);
      }
    }
  }

  logAllPairsOfArray(boxes);
}

// => Time Complexity: O(n * n) => O(n^2)
