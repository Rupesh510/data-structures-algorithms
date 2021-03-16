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
