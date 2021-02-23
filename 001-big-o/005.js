/**
 * Big O Rule 1: Worst Case
 */

{
  const nemo = ["nemo"];
  const everyone = [
    "dory",
    "bruce",
    "marlin",
    "nemo",
    "gill",
    "bloat",
    "nigel",
    "squirt",
    "darla",
    "hank",
  ];
  const large = new Array(1000).fill("nemo");

  function findNemo(array) {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (element === "nemo") {
        console.log("Found Nemo");
        break;
      }
    }
  }

  findNemo(large);
}

// => O(n)