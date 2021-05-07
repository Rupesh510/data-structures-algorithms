/**
 * Approach: Topological Sort without adjacency list
 * Time Complexity: O(P + n^2)
 * Space Complexity: O(n^2)
 */

function canFinish(numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);

  for (let i = 0; i < prerequisites.length; i += 1) {
    inDegree[prerequisites[i][0]] += 1;
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

    for (let i = 0; i < prerequisites.length; i += 1) {
      const pair = prerequisites[i];

      if (pair[1] === current) {
        inDegree[pair[0]] -= 1;

        if (inDegree[pair[0]] === 0) {
          stack.push(pair[0]);
        }
      }
    }
  }

  return count === numCourses;
}
