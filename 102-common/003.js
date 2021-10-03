/**
 * Buy and Sell Stock
 *
 * You are given an array prices where prices[i] is the
 * price of a given stock on the ith day.
 *
 * You want to MAXIMIZE your profit by choosing a single day
 * to buy once stock and choosing a DIFFERENT day in the future
 * to sell that stock.
 *
 * Return the MAXIMIZE PROFIT you can achieve from this transaction.
 * > [5, 3, 7, 5, 10, 8, 4, 3] => Max Profit: 10 - 3 = 7
 * > [5, 8, 3, 11, 15, 4, 8] => Max Profit: 15 - 3 = 12
 * > [1, 7, 3, 9, 3, 7, 3] => Max Profit: 9 - 1 = 8
 *
 * If you cannot achieve any profit, return 0.
 * > [5, 4, 3, 2, 1] => Max Profit: 0
 */

{
  /**
   * Buy and Sell Stock
   *
   * Approach: Brute Force
   */
  function maxProfit(prices) {
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        const profit = prices[j] - prices[i];
        if (profit > max) {
          max = profit;
        }
      }
    }
    return max;
  }

  console.log(
    `maxProfit([5, 3, 7, 5, 10, 8, 4, 3]):`,
    maxProfit([5, 3, 7, 5, 10, 8, 4, 3]),
  ); // 7
  console.log(
    `maxProfit([5, 8, 3, 11, 15, 4, 8]):`,
    maxProfit([5, 8, 3, 11, 15, 4, 8]),
  ); // 12
  console.log(
    `maxProfit([1, 7, 3, 9, 3, 7, 3]):`,
    maxProfit([1, 7, 3, 9, 3, 7, 3]),
  ); // 8
  console.log(`maxProfit([5, 4, 3, 2, 1]):`, maxProfit([5, 4, 3, 2, 1])); // 0
}

{
  /**
   * Buy and Sell Stock
   *
   * Approach: Optimal
   */
  function maxProfit(prices) {
    let max = 0;
    let min = Number.MAX_VALUE;
    for (const price of prices) {
      if (price < min) {
        min = price;
      } else if (price - min > max) {
        max = price - min;
      }
    }
    return max;
  }

  console.log(
    `maxProfit([5, 3, 7, 5, 10, 8, 4, 3]):`,
    maxProfit([5, 3, 7, 5, 10, 8, 4, 3]),
  ); // 7
  console.log(
    `maxProfit([5, 8, 3, 11, 15, 4, 8]):`,
    maxProfit([5, 8, 3, 11, 15, 4, 8]),
  ); // 12
  console.log(
    `maxProfit([1, 7, 3, 9, 3, 7, 3]):`,
    maxProfit([1, 7, 3, 9, 3, 7, 3]),
  ); // 8
  console.log(`maxProfit([5, 4, 3, 2, 1]):`, maxProfit([5, 4, 3, 2, 1])); // 0
}

{
  /**
   * Buy and Sell Stock
   *
   * Approach: Optimal, with `Math` Global object
   */
  function maxProfit(prices) {
    let max = 0;
    let min = Number.MAX_VALUE;
    for (const price of prices) {
      min = Math.min(min, price);
      max = Math.max(max, price - min);
    }
    return max;
  }

  console.log(
    `maxProfit([5, 3, 7, 5, 10, 8, 4, 3]):`,
    maxProfit([5, 3, 7, 5, 10, 8, 4, 3]),
  ); // 7
  console.log(
    `maxProfit([5, 8, 3, 11, 15, 4, 8]):`,
    maxProfit([5, 8, 3, 11, 15, 4, 8]),
  ); // 12
  console.log(
    `maxProfit([1, 7, 3, 9, 3, 7, 3]):`,
    maxProfit([1, 7, 3, 9, 3, 7, 3]),
  ); // 8
  console.log(`maxProfit([5, 4, 3, 2, 1]):`, maxProfit([5, 4, 3, 2, 1])); // 0
}
