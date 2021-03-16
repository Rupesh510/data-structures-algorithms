/**
 * Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 * Solution Ref: https://www.udemy.com/share/103J2KAEsSeFtRQX4=/
 */

{
  /**
   * Approach: Compare against reverse
   */

  function isPalindrome(s) {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let rev = "";
    for (let i = s.length - 1; i >= 0; i -= 1) {
      rev += s[i];
    }
    return rev === s;
  }

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

console.log("\n================================\n");

{
  /**
   * Approach: 2 pointers from outside
   */

  function isPalindrome(s) {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let left = 0;
    right = s.length - 1;
    while (left < right) {
      if (s[left] !== s[right]) return false;
      left += 1;
      right -= 1;
    }
    return true;
  }

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

console.log("\n================================\n");

{
  /**
   * Approach: 2 pointers from center
   */

  function isPalindrome(s) {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let left = Math.floor(s.length / 2),
      right = left;
    if (s.length % 2 === 0) {
      left -= 1;
    }
    while (left >= 0 && right < s.length) {
      if (s[left] !== s[right]) return false;
      left -= 1;
      right += 1;
    }
    return true;
  }

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
