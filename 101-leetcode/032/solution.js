/**
 * Network Delay Time
 * https://leetcode.com/problems/network-delay-time/
 */

const PriorityQueue = require("./priority-queue");

{
  /**
   * Approach: Dijkstra's Algorithm
   * (Doesn't Work with negative weights)
   * Time Complexity: O(E x log n)
   * Space Complexity: O(E + n)
   */

  function networkDelayTime(times, n, k) {
    const distances = new Array(n).fill(Infinity);
    const adjList = distances.map(() => []);
    distances[k - 1] = 0;

    const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
    heap.push(k - 1);

    for (let i = 0; i < times.length; i += 1) {
      const source = times[i][0];
      const target = times[i][1];
      const weight = times[i][2];
      adjList[source - 1].push([target - 1, weight]);
    }

    while (!heap.isEmpty()) {
      const currentVertex = heap.pop();

      const adjacent = adjList[currentVertex];
      for (let i = 0; i < adjacent.length; i += 1) {
        const neighboringVertex = adjacent[i][0];
        const weight = adjacent[i][1];

        if (distances[currentVertex] + weight < distances[neighboringVertex]) {
          distances[neighboringVertex] = distances[currentVertex] + weight;
          heap.push(neighboringVertex);
        }
      }
    }

    const ans = Math.max(...distances);
    return ans === Infinity ? -1 : ans;
  }

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

console.log("\n================================\n");

{
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
