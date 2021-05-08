/**
 * Approach: Bellman-Ford's Algorithm
 * (Works with both positive & negative weights)
 * Time Complexity: O(E x n)
 * Space Complexity: O(n)
 */

function networkDelayTime(times, n, k) {
  const distances = new Array(n).fill(Infinity);
  distances[k - 1] = 0;

  for (let i = 0; i < n - 1; i += 1) {
    let count = 0;

    for (let j = 0; j < times.length; j += 1) {
      const source = times[j][0];
      const target = times[j][1];
      const weight = times[j][2];

      if (distances[source - 1] + weight < distances[target - 1]) {
        distances[target - 1] = distances[source - 1] + weight;
        count += 1;
      }
    }

    if (count === 0) break;
  }

  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
}
