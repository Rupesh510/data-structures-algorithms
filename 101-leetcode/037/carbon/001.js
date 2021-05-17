function climbStairs(n) {
  return countStairs(n, {});
}

function countStairs(stepsRemaining, savedResults) {
  if (stepsRemaining < 0) return 0;
  if (stepsRemaining === 0) return 1;

  if (savedResults[stepsRemaining]) {
    return savedResults[stepsRemaining];
  }

  savedResults[stepsRemaining] =
    countStairs(stepsRemaining - 1, savedResults) +
    countStairs(stepsRemaining - 2, savedResults);

  return savedResults[stepsRemaining];
}
