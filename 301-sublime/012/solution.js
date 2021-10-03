/**
 * Valid Palindrome II (Almost A Palindrome)
 * https://leetcode.com/problems/valid-palindrome-ii/
 * Solution Ref: https://www.udemy.com/share/103J2KAEsSeFtRQX4=/
 */

{
  function validSubPalindrome(s, start, end) {
    while (start < end) {
      if (s[start] !== s[end]) return false;
      start += 1;
      end -= 1;
    }
    return true;
  }

  function validPalindrome(s) {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
      if (s[start] !== s[end]) {
        return (
          validSubPalindrome(s, start + 1, end) ||
          validSubPalindrome(s, start, end - 1)
        );
      }
      start += 1;
      end -= 1;
    }
    return true;
  }

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
