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
