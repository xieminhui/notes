/*
 * @Date: 2020-05-27 11:41:05
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-05-27 11:41:19
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