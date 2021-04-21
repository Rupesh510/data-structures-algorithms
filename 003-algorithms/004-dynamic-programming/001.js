/**
 * Dynamic Programming & Memoization
 */

function addTo80(n) {
  return n + 80;
}

let cache = {};
function memoizeAddTo80(n) {
  if (n in cache) {
    return {
      timing: "short",
      answer: cache[n],
    };
  }

  const answer = n + 80;
  cache[n] = answer;
  return {
    timing: "long",
    answer,
  };
}

console.log("1", memoizeAddTo80(6));
console.log("2", memoizeAddTo80(6));
console.log("3", memoizeAddTo80(6));
