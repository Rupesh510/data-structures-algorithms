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

memoizeAddTo80(6); // { timing: 'long', answer: 86 }

memoizeAddTo80(6); // { timing: 'short', answer: 86 }

memoizeAddTo80(6); // { timing: 'short', answer: 86 }
