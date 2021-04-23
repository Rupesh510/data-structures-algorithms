/**
 * Fibonacci Sequence (without Memoization)
 * Big-O Complexity: O(2^n) - Horrible
 */

let fibExecutionCost = 0; // to compute cost
function slowerFib(n) {
  fibExecutionCost += 1;
  if (n <= 1) return n;
  return slowerFib(n - 2) + slowerFib(n - 1);
}

slowerFib(2); // 1
// => { fibExecutionCost: 0 }

slowerFib(6); // 8
// => { fibExecutionCost: 3 }

slowerFib(10); // 55
// => { fibExecutionCost: 28 }

slowerFib(20); // 6765
// => { fibExecutionCost: 205 }

slowerFib(30); // 832040
// => { fibExecutionCost: 22096 }
