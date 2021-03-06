/**
 * Backspace String Compare
 * https://leetcode.com/problems/backspace-string-compare/
 * Solution Ref: https://www.udemy.com/share/103J2KAEsSeFtRQX4=/
 */

{
  /**
   * Approach: Brute Force
   * Time complexity: O(m + n)
   * Space complexity: O(m + n)
   */

  function buildString(str) {
    const builtString = [];
    for (let p = 0; p < str.length; p++) {
      if (str[p] !== "#") {
        builtString.push(str[p]);
      } else {
        builtString.pop();
      }
    }
    return builtString;
  }

  function backspaceCompare(S, T) {
    const finalS = buildString(S);
    const finalT = buildString(T);
    if (finalS.length !== finalT.length) {
      return false;
    } else {
      for (let p = 0; p < finalS.length; p++) {
        if (finalS[p] !== finalT[p]) {
          return false;
        }
      }
    }
    return true;
  }

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

console.log("\n================================\n");

{
  /**
   * Approach: Optimal
   * Time complexity: O(m + n)
   * Space complexity: O(1)
   */

  function movePointer(P, p) {
    let backCount = 2;
    while (backCount > 0) {
      p -= 1;
      backCount -= 1;
      if (P[p] === "#") {
        backCount += 2;
      }
    }
    return p;
  }

  function backspaceCompare(S, T) {
    let pS = S.length - 1,
      pT = T.length - 1;
    while (pS >= 0 || pT >= 0) {
      if (S[pS] === "#" || T[pT] === "#") {
        if (S[pS] === "#") {
          pS = movePointer(S, pS);
        }
        if (T[pT] === "#") {
          pT = movePointer(T, pT);
        }
      } else {
        if (S[pS] !== T[pT]) {
          return false;
        } else {
          pS -= 1;
          pT -= 1;
        }
      }
    }
    return true;
  }

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
