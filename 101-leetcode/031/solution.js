/**
 * Course Schedule
 * https://leetcode.com/problems/course-schedule/
 */

{
  function canFinish(numCourses, prerequisites) {}

  console.log(`canFinish(2, [[1, 0]]):`, canFinish(2, [[1, 0]])); // true

  console.log(
    `canFinish(2, [
      [1, 0],
      [0, 1],
    ]):`,
    canFinish(2, [
      [1, 0],
      [0, 1],
    ]),
  ); // false
}
