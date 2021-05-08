/**
 * Network Delay Time
 * https://leetcode.com/problems/network-delay-time/
 */

{
  function networkDelayTime(times, n, k) {}

  console.log(
    networkDelayTime(
      [
        [2, 1, 1],
        [2, 3, 1],
        [3, 4, 1],
      ],
      4,
      2,
    ),
  ); // 2

  console.log(networkDelayTime([[1, 2, 1]], 2, 1)); // 1

  console.log(networkDelayTime([[1, 2, 1]], 2, 2)); // -1
}
