/**
 * Big O and Scalability
 */

{
  const { performance } = require("perf_hooks");

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
    const timeStart = performance.now();
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (element === "nemo") {
        console.log("Found Nemo");
      }
    }
    const timeEnd = performance.now();
    const timeTaken = timeEnd - timeStart;
    console.log(`Call to find Nemo took ${timeTaken} milliseconds.`);
  }

  /* findNemo(nemo); */
  /* findNemo(everyone); */
  findNemo(large);
}
