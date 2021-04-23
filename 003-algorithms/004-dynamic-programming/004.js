{
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
      cache[n] = n <= 1 ? n : fib(n - 2) + fib(n - 1);
      return cache[n];
    };
  }

  const fasterFib = fibWithMemo();

  console.log("fasterFib(2):", {
    fibExecutionCost,
    result: fasterFib(2),
  }); // fasterFib(2): { fibExecutionCost: 0, result: 1 }

  console.log("fasterFib(6):", {
    fibExecutionCost,
    result: fasterFib(6),
  }); // fasterFib(6): { fibExecutionCost: 3, result: 8 }

  console.log("fasterFib(10):", {
    fibExecutionCost,
    result: fasterFib(10),
  }); // fasterFib(10): { fibExecutionCost: 7, result: 55 }

  console.log("fasterFib(20):", {
    fibExecutionCost,
    result: fasterFib(20),
  }); // fasterFib(20): { fibExecutionCost: 11, result: 6765 }

  console.log("fasterFib(30):", {
    fibExecutionCost,
    result: fasterFib(30),
  }); // fasterFib(30): { fibExecutionCost: 21, result: 832040 }
}
