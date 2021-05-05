/**
 * Adjacency Matrix Graph - Depth First Search
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

  for (let v = 0; v < connections.length; v++) {
    if (connections[v] > 0 && !seen[v]) {
      depthFirstSearch(v, graph, values, seen);
    }
  }
}

traversalDepthFirstSearch([
  [0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0],
]); // [0, 1, 3, 2, 8, 4, 6, 7, 5]
