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
