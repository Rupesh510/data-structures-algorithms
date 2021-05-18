/**
 * Sudoku Solver
 * https://leetcode.com/problems/sudoku-solver/
 * Solution Ref: https://www.udemy.com/share/103J2KAEsSeFtRQX4=/
 */

{
  /**
   * Approach: Backtracking
   * Time Complexity: O((9!)^9)
   * Space Complexity: O(81) => O(1)
   */

  function solveSudoku(board) {
    const n = board.length;
    const boxes = new Array(n),
      rows = new Array(n),
      cols = new Array(n);

    for (let i = 0; i < n; i += 1) {
      boxes[i] = {};
      rows[i] = {};
      cols[i] = {};
    }

    for (let r = 0; r < n; r += 1) {
      for (let c = 0; c < n; c += 1) {
        if (board[r][c] !== ".") {
          const boxId = getBoxId(r, c);
          const val = board[r][c];

          boxes[boxId][val] = true;
          rows[r][val] = true;
          cols[c][val] = true;
        }
      }
    }

    solveBacktrack(board, boxes, rows, cols, 0, 0);

    return board;
  }

  function getBoxId(row, col) {
    const rowVal = Math.floor(row / 3) * 3;
    const colVal = Math.floor(col / 3);

    return rowVal + colVal;
  }

  function solveBacktrack(board, boxes, rows, cols, r, c) {
    if (r === board.length || c === board[0].length) {
      return true;
    }

    if (board[r][c] === ".") {
      for (let num = 1; num <= 9; num += 1) {
        const numVal = num.toString();
        board[r][c] = numVal;

        const boxId = getBoxId(r, c);
        const box = boxes[boxId];
        const row = rows[r];
        const col = cols[c];

        if (isValid(box, row, col, numVal)) {
          box[numVal] = true;
          row[numVal] = true;
          col[numVal] = true;

          if (c === board[0].length - 1) {
            if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
              return true;
            }
          } else {
            if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
              return true;
            }
          }

          delete box[numVal];
          delete row[numVal];
          delete col[numVal];
        }

        board[r][c] = ".";
      }
    } else {
      if (c === board[0].length - 1) {
        if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
          return true;
        }
      } else {
        if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
          return true;
        }
      }
    }

    return false;
  }

  function isValid(box, row, col, num) {
    if (box[num] || row[num] || col[num]) {
      return false;
    }

    return true;
  }

  console.log(
    solveSudoku([
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ]),
  ); /* 
        [
          ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
          ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
          ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
          ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
          ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
          ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
          ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
          ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
          ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
        ] 
      */
}
