function numOfMinutes(n, headID, manager, informTime) {
  const adjList = manager.map(() => []);

  for (let employee = 0; employee < n; employee++) {
    const directManagerOfEmployee = manager[employee];

    if (directManagerOfEmployee === -1) {
      continue;
    }

    adjList[directManagerOfEmployee].push(employee);
  }

  return depthFirstSearch(headID, adjList, informTime);
}

function depthFirstSearch(currentId, adjList, informTime) {
  if (adjList[currentId].length === 0) {
    return 0;
  }

  let maximum = 0;
  const subordinates = adjList[currentId];

  for (let i = 0; i < subordinates.length; i += 1) {
    maximum = Math.max(
      maximum,
      depthFirstSearch(subordinates[i], adjList, informTime),
    );
  }

  return maximum + informTime[currentId];
}
