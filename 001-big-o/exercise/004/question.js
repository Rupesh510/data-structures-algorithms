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

  arrayOfHiNTimes(6);
}
