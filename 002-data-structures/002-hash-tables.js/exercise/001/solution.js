/**
 * First Recurring Character
 * Create a function that finds first recurring character
 * in an input array of numbers.
 */

{
  /**
   * Approach: Brute Force
   * Time complexity: O(n^2)
   * Space complexity: O(1)
   */

  function firstRecurringCharacter(input) {
    for (let i = 1; i < input.length; i += 1) {
      for (let j = i - 1; j >= 0; j -= 1) {
        if (input[i] === input[j]) {
          return input[i];
        }
      }
    }
    return;
  }

  console.log(
    `firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]):`,
    firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]),
  ); // 2

  console.log(
    `firstRecurringCharacter([1, 5, 1, 2, 3, 5, 1, 2, 4]):`,
    firstRecurringCharacter([1, 5, 1, 2, 3, 5, 1, 2, 4]),
  ); // 1

  console.log(
    `firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]):`,
    firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]),
  ); // 5
}

console.log("\n================================\n");

{
  /**
   * Approach: Optimal (Hash Table)
   * More Details: Custom Hash Map
   * Time complexity: O(n)
   * Space complexity: O(n)
   */

  function firstRecurringCharacter(input) {
    let numsMap = {};
    for (let i = 0; i < input.length; i += 1) {
      if (numsMap[input[i]] !== undefined) {
        return input[i];
      } else {
        numsMap[input[i]] = i;
      }
    }
    return;
  }

  console.log(
    `firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]):`,
    firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]),
  ); // 2

  console.log(
    `firstRecurringCharacter([1, 5, 1, 2, 3, 5, 1, 2, 4]):`,
    firstRecurringCharacter([1, 5, 1, 2, 3, 5, 1, 2, 4]),
  ); // 1

  console.log(
    `firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]):`,
    firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]),
  ); // 5
}

console.log("\n================================\n");

{
  /**
   * Approach: Optimal (Hash Table)
   * More Details: Instantiating Global Map Object
   * Time complexity: O(n)
   * Space complexity: O(n)
   */

  function firstRecurringCharacter(input) {
    let numsMap = new Map();
    for (let i = 0; i < input.length; i += 1) {
      if (numsMap.has(input[i])) {
        return numsMap.get(input[i]);
      }
      numsMap.set(input[i], input[i]);
    }
    return;
  }

  console.log(
    `firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]):`,
    firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]),
  ); // 2

  console.log(
    `firstRecurringCharacter([1, 5, 1, 2, 3, 5, 1, 2, 4]):`,
    firstRecurringCharacter([1, 5, 1, 2, 3, 5, 1, 2, 4]),
  ); // 1

  console.log(
    `firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]):`,
    firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]),
  ); // 5
}

console.log("\n================================\n");

{
  /**
   * Approach: Optimal (Hash Table)
   * More Details: Instantiating Global Set Object
   * Time complexity: O(n)
   * Space complexity: O(n)
   */

  function firstRecurringCharacter(input) {
    let numsSet = new Set();
    for (let i = 0; i < input.length; i += 1) {
      if (numsSet.has(input[i])) {
        return input[i];
      }
      numsSet.add(input[i]);
    }
    return;
  }

  console.log(
    `firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]):`,
    firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]),
  ); // 2

  console.log(
    `firstRecurringCharacter([1, 5, 1, 2, 3, 5, 1, 2, 4]):`,
    firstRecurringCharacter([1, 5, 1, 2, 3, 5, 1, 2, 4]),
  ); // 1

  console.log(
    `firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]):`,
    firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]),
  ); // 5
}
