/**
 * Merge Sorted Arrays
 * Create a function that merges sorted arrays
 */

{
  function mergeSortedArrays(array1, array2) {
    const mergedArray = [];

    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    if (array1.length === 0) {
      return array2;
    }

    if (array2.length === 0) {
      return array1;
    }

    while (array1Item || array2Item) {
      if (array2Item === undefined || array1Item < array2Item) {
        mergedArray.push(array1Item);
        array1Item = array1[i];
        i += 1;
      } else {
        mergedArray.push(array2Item);
        array2Item = array2[j];
        j += 1;
      }
    }

    return mergedArray;
  }

  console.log(
    `mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]):`,
    mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]),
  ); // [0, 3, 3, 4, 4, 6, 30, 31]
}