/**
 * Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 */

{
  function isValid(s) {}

  console.log(`isValid("()"):`, isValid("()")); // true

  console.log(`isValid("()[]{}"):`, isValid("()[]{}")); // true

  console.log(`isValid("(]"):`, isValid("(]")); // false

  console.log(`isValid("([)]"):`, isValid("([)]")); // false

  console.log(`isValid("{[]}"):`, isValid("{[]}")); // true
}
