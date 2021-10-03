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
  console.log(
    `backspaceCompare("ab#z", "az#z"):`,
    backspaceCompare("ab#z", "az#z"),
  ); // true
  console.log(
    `backspaceCompare("abc#d", "acc#c"):`,
    backspaceCompare("abc#d", "acc#c"),
  ); // false
  console.log(
    `backspaceCompare("x#y#z#", "a#"):`,
    backspaceCompare("x#y#z#", "a#"),
  ); // true
  console.log(
    `backspaceCompare("a###b", "b"):`,
    backspaceCompare("a###b", "b"),
  ); // true
  console.log(
    `backspaceCompare("Ab#z", "ab#z"):`,
    backspaceCompare("Ab#z", "ab#z"),
  ); // false
}
