/**
 * 2-D Arrays (Matrix) Traversal
 * Approach: Depth First Search
 */

const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

function traversalDepthFirstSearch(matrix) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  const values = [];
  depthFirstSearch(matrix, 0, 0, seen, values);

  return values;
}

function depthFirstSearch(matrix, row, col, seen, values) {
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].length ||
    seen[row][col]
  ) {
    return;
  }

  seen[row][col] = true;
  values.push(matrix[row][col]);

  for (let i = 0; i < directions.length; i += 1) {
    const currentDir = directions[i];
    depthFirstSearch(
      matrix,
      row + currentDir[0],
      col + currentDir[1],
      seen,
      values,
    );
  }
}

console.log(
  `traversalDepthFirstSearch([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ]):`,
  traversalDepthFirstSearch([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ]),
); /*
  [1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 
   9, 8, 13, 18, 17, 12, 7, 6, 11, 16]
 */
