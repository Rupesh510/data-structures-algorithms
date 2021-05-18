function missingNumber(nums) {
  let sumIfNoneMissing = sumAllNumbersTillN(nums.length);
  let actualSum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    actualSum += nums[i];
  }

  return sumIfNoneMissing - actualSum;
}

function sumAllNumbersTillN(n) {
  return (n * (n + 1)) / 2;
}
