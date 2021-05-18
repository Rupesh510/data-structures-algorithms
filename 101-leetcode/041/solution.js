/**
 * Plus One
 * https://leetcode.com/problems/plus-one/
 * Solution Ref: https://youtu.be/Llk4N7ERILg
 */

{
  function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i -= 1) {
      if (digits[i] !== 9) {
        digits[i] += 1;
        return digits;
      } else {
        digits[i] = 0;
      }
    }

    digits.unshift(1);
    return digits;
  }

  console.log(`plusOne([1, 2, 3]):`, plusOne([1, 2, 3])); // [1, 2, 4]
  console.log(`plusOne([4, 3, 2, 1]):`, plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
  console.log(`plusOne([0]):`, plusOne([0])); // [1]
}
