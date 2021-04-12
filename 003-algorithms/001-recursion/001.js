console.log("Iterative 👇");

{
  function iterativeFactorial(n) {
    let answer = 1;
    while (n > 0) {
      answer *= n;
      n -= 1;
    }
    return answer;
  }

  console.log("iterativeFactorial(3):", iterativeFactorial(3));
  console.log("iterativeFactorial(4):", iterativeFactorial(4));
  console.log("iterativeFactorial(5):", iterativeFactorial(5));
}

console.log("\nRecursive 👇");

{
  function recursiveFactorial(n) {
    if (n === 0) return 1;
    return n * recursiveFactorial(n - 1);
  }

  console.log("recursiveFactorial(3):", recursiveFactorial(3));
  console.log("recursiveFactorial(4):", recursiveFactorial(4));
  console.log("recursiveFactorial(5):", recursiveFactorial(5));
}

console.log("\nTail Recursive 👇");

{
  function tailRecursiveFactorial(n, total = 1) {
    if (n === 0) return total;
    return tailRecursiveFactorial(n - 1, total * n);
  }

  console.log("tailRecursiveFactorial(3):", tailRecursiveFactorial(3));
  console.log("tailRecursiveFactorial(4):", tailRecursiveFactorial(4));
  console.log("tailRecursiveFactorial(5):", tailRecursiveFactorial(5));
}
