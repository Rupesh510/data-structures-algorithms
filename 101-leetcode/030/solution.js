/**
 * Time Needed to Inform All Employees
 * https://leetcode.com/problems/time-needed-to-inform-all-employees/
 */

{
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

  console.log(`numOfMinutes(1, 0, [-1], [0]):`, numOfMinutes(1, 0, [-1], [0])); // 0

  console.log(
    `numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0]):`,
    numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0]),
  ); // 1

  console.log(
    `numOfMinutes(7, 6, [1, 2, 3, 4, 5, 6, -1], [0, 6, 5, 4, 3, 2, 1]):`,
    numOfMinutes(7, 6, [1, 2, 3, 4, 5, 6, -1], [0, 6, 5, 4, 3, 2, 1]),
  ); // 21

  console.log(
    `numOfMinutes(
      15,
      0,
      [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    ):`,
    numOfMinutes(
      15,
      0,
      [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    ),
  ); // 3

  console.log(
    `numOfMinutes(4, 2, [3, 3, -1, 2], [0, 0, 162, 914]):`,
    numOfMinutes(4, 2, [3, 3, -1, 2], [0, 0, 162, 914]),
  ); // 1076
}
