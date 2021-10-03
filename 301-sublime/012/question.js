/**
 * Valid Palindrome II (Almost A Palindrome)
 * https://leetcode.com/problems/valid-palindrome-ii/
 */

{
  function validPalindrome(s) {}

  console.log(
    `validPalindrome("A man, a plan, a canal: Panama"):`,
    validPalindrome("A man, a plan, a canal: Panama"),
  ); // true

  console.log(`validPalindrome("race a car"):`, validPalindrome("race a car")); // true

  console.log(`validPalindrome("aba"):`, validPalindrome("aba")); // true

  console.log(`validPalindrome("aca"):`, validPalindrome("aca")); // true

  console.log(`validPalindrome("aabaa"):`, validPalindrome("aabaa")); // true

  console.log(`validPalindrome("aabbaa"):`, validPalindrome("aabbaa")); // true

  console.log(`validPalindrome("abc"):`, validPalindrome("abc")); // false

  console.log(`validPalindrome("a"):`, validPalindrome("a")); // true

  console.log(`validPalindrome(""):`, validPalindrome("")); // true
}
