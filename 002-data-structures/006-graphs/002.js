/**
 * Adjacency Matrix Graph - Breadth First Search
 */

{
  function traversalBreadthFirstSearch(graph) {
    const seen = {};
    const queue = [0];
    const values = [];

    while (queue.length) {
      const vertex = queue.shift();
      values.push(vertex);
      seen[vertex] = true;

      const connections = graph[vertex];

      for (let v = 0; v < connections.length; v++) {
        if (connections[v] > 0 && !seen[v]) {
          queue.push(v);
        }
      }
    }

    return values;
  }

  console.log(
    traversalBreadthFirstSearch([
      [0, 1, 0, 1, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0],
    ]),
  ); // [0, 1, 3, 2, 4, 5, 8, 6, 7]
}
