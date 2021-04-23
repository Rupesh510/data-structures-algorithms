{
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

  console.log("slowerFib(2):", {
    fibExecutionCost,
    result: slowerFib(2),
  }); // slowerFib(2): { fibExecutionCost: 0, result: 1 }

  console.log("slowerFib(6):", {
    fibExecutionCost,
    result: slowerFib(6),
  }); // slowerFib(6): { fibExecutionCost: 3, result: 8 }

  console.log("slowerFib(10):", {
    fibExecutionCost,
    result: slowerFib(10),
  }); // slowerFib(10): { fibExecutionCost: 28, result: 55 }

  console.log("slowerFib(20):", {
    fibExecutionCost,
    result: slowerFib(20),
  }); // slowerFib(20): { fibExecutionCost: 205, result: 6765 }

  console.log("slowerFib(30):", {
    fibExecutionCost,
    result: slowerFib(30),
  }); // slowerFib(30): { fibExecutionCost: 22096, result: 832040 }
}
