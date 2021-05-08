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
