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
