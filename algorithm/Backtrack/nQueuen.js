/*
 * @Date: 2020-05-12 14:46:44
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-05-12 16:30:50
 * @description:
 */

// n皇后问题
// 给你一个 N×N 的棋盘，让你放置 N 个皇后，使得它们不能互相攻击。
// PS：皇后可以攻击同一行、同一列、左上左下右上右下四个方向的任意单位。

//  for 选择 in 选择列表: (从第一列开始)
//  # 做选择          
//  将该选择从选择列表移除 （判断是否行列左右上是否合法）
//  路径.add(选择)          （合法，该位置变成皇后）
//  backtrack(路径, 选择列表) （行加1）
//  # 撤销选择
//  路径.remove(选择)           （将皇后位置置为.)
//  将该选择再加入选择列表

function solveNQueens (n) {
  let board = new Array(n).fill('.'), res = new Array();
  for (let i in board) {
    board[i] = new Array(n).fill('.')
  }

  function backtrack (board, row) {
    if (row == board.length) {
      res.push(board.map(v => {
        return v.join('')
      }));
      return;
    }

    // 从列开始算
    for (let col = 0; col < board.length; col++) {
      // 不合法情况
      if (!isValid(board, row, col)) {
        continue;
      }
      board[row][col] = 'Q';
      backtrack(board, row + 1);
      board[row][col] = '.';
    }
  }

  function isValid (board, row, col) {
    let len = board.length;

    // 检查列是否由冲突
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') {
        return false;
      }
    }

    // 检查右上方
    for (let i = row - 1, j = col + 1; i >= 0 && j < len; i--, j++) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }

    // 检查左上方
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }
    return true;
  }

  backtrack(board, 0);
  return res;
}

solveNQueens(4);