/**
 * Adjacency List Graph - Depth First Search
 */

function traversalDepthFirstSearch(graph) {
  const values = [];
  depthFirstSearch(0, graph, values, {});
  return values;
}

function depthFirstSearch(vertex, graph, values, seen) {
  values.push(vertex);
  seen[vertex] = true;

  const connections = graph[vertex];

  for (let i = 0; i < connections.length; i++) {
    const connection = connections[i];

    if (!seen[connection]) {
      depthFirstSearch(connection, graph, values, seen);
    }
  }
}

traversalDepthFirstSearch([
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
]); // [0, 1, 3, 2, 8, 4, 6, 7, 5]
