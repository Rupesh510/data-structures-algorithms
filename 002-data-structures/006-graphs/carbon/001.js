/**
 * Adjacency List Graph - Breadth First Search
 */

function traversalBreadthFirstSearch(graph) {
  const seen = {};
  const queue = [0];
  const values = [];

  while (queue.length) {
    const vertex = queue.shift();
    values.push(vertex);
    seen[vertex] = true;

    const connections = graph[vertex];

    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];

      if (!seen[connection]) {
        queue.push(connection);
      }
    }
  }

  return values;
}

traversalBreadthFirstSearch([
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
]); // [0, 1, 3, 2, 4, 5, 8, 6, 7]
