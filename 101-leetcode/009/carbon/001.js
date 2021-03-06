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
