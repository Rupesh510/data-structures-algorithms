/**
 * Big O Rule 2: Remove Constants - Part 1
 */

{
  function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    const middleIndex = Math.floor(items.length / 2);
    let index = 0;

    while (index < middleIndex) {
      console.log(items[index]);
      index++;
    }

    for (let i = 0; i < items.length; i++) {
      console.log("Hi...");
    }
  }
}

// => Time Complexity: O(n/2 + 101) => O(n)
