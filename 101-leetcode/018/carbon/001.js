/**
 * Approach: with Stack
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

const parens = {
  "(": ")",
  "{": "}",
  "[": "]",
};

function isValid(s) {
  if (s.length === 0) {
    return true;
  }

  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    if (parens[s[i]]) {
      stack.push(s[i]);
    } else {
      const leftBracket = stack.pop();
      const correctBracket = parens[leftBracket];

      if (s[i] !== correctBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
