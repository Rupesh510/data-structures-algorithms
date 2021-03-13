/**
 * Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Solution Ref: https://www.udemy.com/share/103J2KAEsSeFtRQX4=/
 */

{
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
