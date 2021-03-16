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
