/**
 * Dynamic Programming & Memoization
 * with closures in JavaScript
 */

function addTo80() {
  let cache = {};
  return (n) => {
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
  };
}

const memoizeAddTo80 = addTo80();

console.log("1", memoizeAddTo80(6));
// 1 { timing: 'long', answer: 86 }

console.log("2", memoizeAddTo80(6));
// 2 { timing: 'short', answer: 86 }

console.log("3", memoizeAddTo80(6));
// 3 { timing: 'short', answer: 86 }
