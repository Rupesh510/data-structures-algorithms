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
