/**
 * O(n) => Linear Time
 */

{
  const large = new Array(1000).fill("nemo");

  function findNemo(array) {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (element === "nemo") {
        console.log("Found Nemo");
      }
    }
  }

  findNemo(large); // O(n) => Linear Time
}

// => Time Complexity: O(n)
