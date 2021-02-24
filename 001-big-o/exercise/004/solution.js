/**
 * What is the Space Complexity of the given function
 */

{
  function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
      hiArray[i] = "hi";
    }
    return hiArray;
  }

  console.log(arrayOfHiNTimes(6));
}

// => Time Complexity : O(n)
// => Space Complexity: O(n)
