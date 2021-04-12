/**
 * Minimum Remove to Make Valid Parentheses
 * https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
 */

{
  function minRemoveToMakeValid(s) {}

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
