/**
 * Fibonacci Sequence (with Memoization)
 * Big-O Complexity: O(n) - Good
 */

let fibExecutionCost = 0; // to compute cost
function fibWithMemo() {
  let cache = {};
  return function fib(n) {
    if (n in cache) return cache[n];

    fibExecutionCost += 1;
    if (n <= 1) return n;
    cache[n] = fib(n - 2) + fib(n - 1);
    return cache[n];
  };
}

const fasterFib = fibWithMemo();

fasterFib(2); // 1
// => { fibExecutionCost: 0 }

fasterFib(6); // 8
// => { fibExecutionCost: 3 }

fasterFib(10); // 55
// => { fibExecutionCost: 8 }

fasterFib(20); // 6765
// => { fibExecutionCost: 12 }

fasterFib(30); // 832040
// => { fibExecutionCost: 22 }
