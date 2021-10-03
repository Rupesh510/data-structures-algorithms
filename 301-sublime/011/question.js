/**
 * Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 */

{
  function isPalindrome(s) {}

  console.log(
    `isPalindrome("A man, a plan, a canal: Panama"):`,
    isPalindrome("A man, a plan, a canal: Panama"),
  ); // true

  console.log(`isPalindrome("race a car"):`, isPalindrome("race a car")); // false

  console.log(`isPalindrome("aabaa"):`, isPalindrome("aabaa")); // true

  console.log(`isPalindrome("aabbaa"):`, isPalindrome("aabbaa")); // true

  console.log(`isPalindrome("abc"):`, isPalindrome("abc")); // false

  console.log(`isPalindrome("a"):`, isPalindrome("a")); // true

  console.log(`isPalindrome(""):`, isPalindrome("")); // true
}
