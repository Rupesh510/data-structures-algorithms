/**
 * Approach: Naive Breadth First Search
 */

function canFinish(numCourses, prerequisites) {
  const adjList = new Array(numCourses).fill(0).map(() => []);

  for (let i = 0; i < prerequisites.length; i += 1) {
    const pair = prerequisites[i];
    adjList[pair[1]].push(pair[0]);
  }

  for (let v = 0; v < numCourses; v += 1) {
    const queue = [];
    const seen = {};

    for (let i = 0; i < adjList[v].length; i += 1) {
      queue.push(adjList[v][i]);
    }

    while (queue.length) {
      const current = queue.shift();
      seen[current] = true;

      if (current === v) return false;

      const adjacent = adjList[current];

      for (let i = 0; i < adjacent.length; i += 1) {
        const next = adjacent[i];
        if (!seen[next]) {
          queue.push(next);
        }
      }
    }
  }

  return true;
}
