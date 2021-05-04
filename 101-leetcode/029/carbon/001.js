function orangesRotting(grid) {
  if (grid.length === 0) return 0;

  const queue = [];
  let freshOranges = 0;

  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[0].length; col += 1) {
      if (grid[row][col] === ROTTEN) {
        queue.push([row, col]);
      }

      if (grid[row][col] === FRESH) {
        freshOranges += 1;
      }
    }
  }

  let minutes = 0;
  let currentQueueSize = queue.length;

  while (queue.length > 0) {
    if (currentQueueSize === 0) {
      currentQueueSize = queue.length;
      minutes += 1;
    }

    const currentOrange = queue.shift();
    currentQueueSize -= 1;
    const row = currentOrange[0];
    const col = currentOrange[1];

    for (let i = 0; i < directions.length; i += 1) {
      const currentDir = directions[i];
      const nextRow = row + currentDir[0];
      const nextCol = col + currentDir[1];

      if (
        nextRow < 0 ||
        nextRow >= grid.length ||
        nextCol < 0 ||
        nextCol >= grid[0].length
      ) {
        continue;
      }

      if (grid[nextRow][nextCol] === FRESH) {
        grid[nextRow][nextCol] = 2;
        freshOranges -= 1;
        queue.push([nextRow, nextCol]);
      }
    }
  }

  if (freshOranges !== 0) {
    return -1;
  }

  return minutes;
}
