/**
 * Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Solution Ref: https://youtu.be/mmIMpgh67vg
 */

{
  function maxProfit(prices) {
    let minBuyPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
      if (price < minBuyPrice) {
        minBuyPrice = price;
      } else if (price - minBuyPrice > maxProfit) {
        maxProfit = price - minBuyPrice;
      }
    }

    return maxProfit;
  }

  console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
  /**
   * Answer: 5
   * Explanation: Buy on day 2 (price = 1) and
   * sell on day 5 (price = 6), profit = 6-1 = 5.
   * Note that buying on day 2 and selling on day 1
   * is not allowed because you must buy before you sell.
   */

  console.log(maxProfit([7, 6, 4, 3, 1])); // 0
  /**
   * Answer: 0
   * Explanation: In this case, no transactions
   * are done and the max profit = 0.
   */
}
