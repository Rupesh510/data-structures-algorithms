/**
 * Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Solution Ref: https://www.udemy.com/share/103J2KAEsSeFtRQX4=/
 */

{
  /**
   * Approach: Brute Force
   * Time complexity: O(n^2)
   * Space complexity: O(n)
   */

  function lengthOfLongestSubstring(s) {
    if (s.length <= 1) return s.length;
    let longest = 0;
    for (let left = 0; left < s.length; left += 1) {
      let seenChars = {},
        currentLength = 0;
      for (let right = left; right < s.length; right += 1) {
        const currentChar = s[right];
        if (!seenChars[currentChar]) {
          currentLength += 1;
          seenChars[currentChar] = true;
          longest = Math.max(longest, currentLength);
        } else {
          break;
        }
      }
    }
    return longest;
  }

  console.log(
    `lengthOfLongestSubstring("abccabb"):`,
    lengthOfLongestSubstring("abccabb"),
  ); // 3

  console.log(
    `lengthOfLongestSubstring("abcbdca"):`,
    lengthOfLongestSubstring("abcbdca"),
  ); // 4

  console.log(
    `lengthOfLongestSubstring("abcabcbb"):`,
    lengthOfLongestSubstring("abcabcbb"),
  ); // 3

  console.log(
    `lengthOfLongestSubstring("bbbbb"):`,
    lengthOfLongestSubstring("bbbbb"),
  ); // 1

  console.log(
    `lengthOfLongestSubstring("pwwkew"):`,
    lengthOfLongestSubstring("pwwkew"),
  ); // 3

  console.log(`lengthOfLongestSubstring(""):`, lengthOfLongestSubstring("")); // 0
}

console.log("\n================================\n");

{
  /**
   * Approach: Optimal
   * More Details: Hash Map
   * Time complexity: O(n)
   * Space complexity: O(n)
   */

  function lengthOfLongestSubstring(s) {}

  console.log(
    `lengthOfLongestSubstring("abccabb"):`,
    lengthOfLongestSubstring("abccabb"),
  ); // 3

  console.log(
    `lengthOfLongestSubstring("abcbdca"):`,
    lengthOfLongestSubstring("abcbdca"),
  ); // 4

  console.log(
    `lengthOfLongestSubstring("abcabcbb"):`,
    lengthOfLongestSubstring("abcabcbb"),
  ); // 3

  console.log(
    `lengthOfLongestSubstring("bbbbb"):`,
    lengthOfLongestSubstring("bbbbb"),
  ); // 1

  console.log(
    `lengthOfLongestSubstring("pwwkew"):`,
    lengthOfLongestSubstring("pwwkew"),
  ); // 3

  console.log(`lengthOfLongestSubstring(""):`, lengthOfLongestSubstring("")); // 0
}

console.log("\n================================\n");

{
  /**
   * Approach: Optimal
   * More Details: Hash Map with `Map` Global Object
   * Time complexity: O(n)
   * Space complexity: O(n)
   */

  function lengthOfLongestSubstring(s) {}

  console.log(
    `lengthOfLongestSubstring("abccabb"):`,
    lengthOfLongestSubstring("abccabb"),
  ); // 3

  console.log(
    `lengthOfLongestSubstring("abcbdca"):`,
    lengthOfLongestSubstring("abcbdca"),
  ); // 4

  console.log(
    `lengthOfLongestSubstring("abcabcbb"):`,
    lengthOfLongestSubstring("abcabcbb"),
  ); // 3

  console.log(
    `lengthOfLongestSubstring("bbbbb"):`,
    lengthOfLongestSubstring("bbbbb"),
  ); // 1

  console.log(
    `lengthOfLongestSubstring("pwwkew"):`,
    lengthOfLongestSubstring("pwwkew"),
  ); // 3

  console.log(`lengthOfLongestSubstring(""):`, lengthOfLongestSubstring("")); // 0
}
