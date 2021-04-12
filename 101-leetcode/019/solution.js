/**
 * Minimum Remove to Make Valid Parentheses
 * https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
 */

{
  /**
   * Approach: with Stack
   * Time complexity: O(n)
   * Space complexity: O(n)
   */

  function minRemoveToMakeValid(s) {
    const res = s.split("");
    const stack = [];

    for (let i = 0; i < res.length; i++) {
      if (res[i] === "(") {
        stack.push(i);
      } else if (res[i] === ")" && stack.length) {
        stack.pop();
      } else if (res[i] === ")") {
        res[i] = "";
      }
    }

    while (stack.length) {
      const curIdx = stack.pop();
      res[curIdx] = "";
    }

    return res.join("");
  }

  console.log(
    `minRemoveToMakeValid("lee(t(c)o)de)"):`,
    minRemoveToMakeValid("lee(t(c)o)de)"),
  ); // "lee(t(c)o)de"

  console.log(
    `minRemoveToMakeValid("a)b(c)d"):`,
    minRemoveToMakeValid("a)b(c)d"),
  ); // "ab(c)d"

  console.log(`minRemoveToMakeValid("))(("):`, minRemoveToMakeValid("))((")); // ""

  console.log(
    `minRemoveToMakeValid("(a(b(c)d)"):`,
    minRemoveToMakeValid("(a(b(c)d)"),
  ); // "a(b(c)d)"
}
