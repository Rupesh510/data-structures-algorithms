/**
 * Backspace String Compare
 * https://leetcode.com/problems/backspace-string-compare/
 */

{
  function backspaceCompare(S, T) {}

  console.log(
    `backspaceCompare("ab#c", "ad#c"):`,
    backspaceCompare("ab#c", "ad#c"),
  ); // true
  console.log(
    `backspaceCompare("ab##", "c#d#"):`,
    backspaceCompare("ab##", "c#d#"),
  ); // true
  console.log(
    `backspaceCompare("a##c", "#a#c"):`,
    backspaceCompare("a##c", "#a#c"),
  ); // true
  console.log(`backspaceCompare("a#c", "b"):`, backspaceCompare("a#c", "b")); // false
}
