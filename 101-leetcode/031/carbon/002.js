/**
 * Approach: Topological Sort with adjacency list
 * Time Complexity: O(P + n^2)
 * Space Complexity: O(n^2)
 */

function canFinish(numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);
  const adjList = inDegree.map(() => []);

  for (let i = 0; i < prerequisites.length; i += 1) {
    const pair = prerequisites[i];
    inDegree[pair[0]] += 1;
    adjList[pair[1]].push(pair[0]);
  }

  const stack = [];

  for (let i = 0; i < inDegree.length; i += 1) {
    if (inDegree[i] === 0) {
      stack.push(i);
    }
  }

  let count = 0;

  while (stack.length) {
    const current = stack.pop();
    count += 1;

    const adjacent = adjList[current];

    for (let i = 0; i < adjacent.length; i += 1) {
      const next = adjacent[i];
      inDegree[next] -= 1;

      if (inDegree[next] === 0) {
        stack.push(next);
      }
    }
  }

  return count === numCourses;
}
