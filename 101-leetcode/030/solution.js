/**
 * Time Needed to Inform All Employees
 * https://leetcode.com/problems/time-needed-to-inform-all-employees/
 */

{
  function numOfMinutes(n, headID, manager, informTime) {}

  console.log(numOfMinutes(1, 0, [-1], [0])); // 0

  console.log(numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0])); // 1

  console.log(
    numOfMinutes(7, 6, [1, 2, 3, 4, 5, 6, -1], [0, 6, 5, 4, 3, 2, 1]),
  ); // 21

  console.log(
    numOfMinutes(
      15,
      0,
      [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    ),
  ); // 3

  console.log(numOfMinutes(4, 2, [3, 3, -1, 2], [0, 0, 162, 914])); // 1076
}
