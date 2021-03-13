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
