/*
 * @Date: 2020-05-27 11:41:05
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-09-22 16:57:30
 * @description:
 */

var setZeroes = function (matrix) {
  let map = new Map(),
    len1 = matrix.length,
    len2 = matrix[0].length;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (!map.has(`${i}${j}`) && matrix[i][j] == 0) {
        let [k, l] = [i - 1, j - 1], [q, w] = [i + 1, j + 1];
        while (k >= 0) {
          if (matrix[k][j]) {
            map.set(`${k}${j}`, 1);
            matrix[k][j] = 0;
          }
          k--;
        }
        while (q < len1) {
          if (matrix[q][j]) {
            matrix[q][j] = 0;
            map.set(`${q}${j}`, 1);
          }
          q++;
        }
        while (l >= 0) {
          if (matrix[i][l]) {
            matrix[i][l] = 0;
            map.set(`${i}${l}`, 1);
          }

          l--;
        }
        while (w < len2) {
          if (matrix[i, w]) {
            map.set(`${i}${w}`, 1);
            matrix[i][w] = 0;
          }
          w++;
        }
      }
    }
  }
};

setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])

var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      continue;
    }
    nums.splice(i, 1);
    nums.push(0);
    i--;
  }
  return nums;
};
// moveZeroes([0, 1, 0, 3, 12])

var minCameraCover = function (root) {
  let count = 0;
  function dfs (node, pa) {
    if (!node) return;
    if (!node.ca && !pa) {
      node.ca = true;
      count++;
    }
    dfs(node.left, node.ca);
    dfs(node.right, node.ca);
  }
  if (!root.left && !root.right) {
    return 1;
  } else if (!root.left) {
    dfs(root.right);
  } else if (!root.right) {
    dfs(root.left);

  } else {
    dfs(root)
  }
  return count;
};
let node = {
  val: 0,
  left: null,
  right: {
    val: 0,
    left: null,
    right: {
      val: 0,
      left: null,
      right: {
        val: 0,
        left: null,
        right: {
          val: 0,
          left: null,
          right: null
        }
      }
    }
  }
}
console.log(minCameraCover(node))